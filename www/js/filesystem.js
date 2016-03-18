var fileSystem = angular.module('fileSystem',[]);

fileSystem.factory('fileSystem', ['$q', '$timeout', function($q, $timeout) {
	var fsDefer = $q.defer();
	
	var DEFAULT_QUOTA_MB = 0;

	window.resolveLocalFileSystemURL  = window.resolveLocalFileSystemURL || window.webkitResolveLocalFileSystemURL;
	
	window.requestFileSystem = window.webkitRequestFileSystem || window.requestFileSystem;
	window.webkitStorageInfo = window.webkitStorageInfo || {
		requestQuota: function(type, bytes, successFn, errorFn) {
			errorFn(new Error("Not implemented"));
		}
	}
	
	//wrap resolve/reject in an empty $timeout so it happens within the Angular call stack
	//easier than .apply() since no scope is needed and doesn't error if already within an apply
	function safeResolve(deferral, message) {
		$timeout(function() {
			deferral.resolve(message);
		});
	}
	function safeReject(deferral, message) {
		$timeout(function() {
			deferral.reject(message);
		});
	}

	var requestFsFn = function(bytes) {
		window.requestFileSystem(window.PERSISTENT, bytes, function(fs) {
			safeResolve(fsDefer, fs);
		}, function(e){
			safeReject(fsDefer, {text: "Error requesting File System access", obj: e});
		});
	};

	window.webkitStorageInfo.requestQuota(window.PERSISTENT, DEFAULT_QUOTA_MB*1024*1024, function(grantedBytes) {
		if(window.cordova) {
			document.addEventListener('deviceready', function() { requestFsFn(grantedBytes); }, false);
		} else {
			requestFsFn(grantedBytes);
		}
	}, function(e) {
		safeReject(fsDefer, {text: "Error requesting Quota", obj: e});
	});
	
	var fileSystem = {
		isSupported: function() {
			return angular.isDefined(window.webkitStorageInfo);
		},
	
		
		getFile: function(fileName) {
			var def = $q.defer();

			this.getFileEntry(fileName).then(function(fileEntry) {
				// Get a File object representing the file,
				fileEntry.file(function(file) {
					safeResolve(def, file);
				}, function(e) {
					safeReject(def, {text: "Error getting file object", obj: e});
				});
			}, function(err) {
				def.reject(err);
			});
			
			return def.promise;
		},
	
		/**
		 * @param  String Local filesystem URL.
		 * @return Object Promise with a File argument.
		 */
		getFileFromLocalFileSystemURL: function(url) {
			var def = $q.defer();
			window.resolveLocalFileSystemURL(
				url,
				function(fileEntry) {
					fileEntry.file(
						function(file) {
							safeResolve(def, file);
						}, function(e) {
							safeReject(def, {text: "Error getting file object", obj: e});
						}
					);
				},
				function(e) {
					safeReject(def, {text: "Error resolving FileSystem URL", obj: e});
				}
			);

			return def.promise;
		},
		readFile: function(fileName, returnType) {
			var def = $q.defer();
			
			returnType = returnType || "text";
			
			fsDefer.promise.then(function(fs) {
				fs.root.getFile(fileName, {}, function(fileEntry) {
					// Get a File object representing the file,
					// then use FileReader to read its contents.
					fileEntry.file(function(file) {
						var reader = new FileReader();
						
						reader.onloadend = function() {
							safeResolve(def, this.result);
						};
						
						reader.onerror = function(e) {
							safeReject(def, {text: "Error reading file", obj: e});
						};
						
						
						switch(returnType) {
							case 'arraybuffer':
								reader.readAsArrayBuffer(file);
								break;
							case 'binarystring':
								reader.readAsBinaryString(file);
								break;
							case 'dataurl':
								reader.readAsDataURL(file);
								break;
							default:
								reader.readAsText(file);
						}
					}, function(e) {
						safeReject(def, {text: "Error getting file", obj: e});
					});
				}, function(e) {
					safeReject(def, {text: "Error getting file", obj: e});
				});
			}, function(err) {
				def.reject(err);
			});
			
			return def.promise;
		},
		
	};

	// Keep old name for backwards compatibility
	fileSystem.requestQuotaIncrease = fileSystem.requestQuota;

	return fileSystem;
}]);

