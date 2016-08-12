angular.module('Eggly', [

]).
controller('MainCtrl', function($scope){
  $scope.hello = 'world';
  $scope.categories = [

  	{"id": 0, "name": "Development"},
    {"id": 1, "name": "Design"},
    {"id": 2, "name": "Excercise"},
    {"id": 3, "name": "Humor"}
  ];

  $scope.bookmarks = [

  	{"id": 0, "title": "AngularJs" , "url" : "http://angularjs.org", "category" :"Development"},
    {"id": 1, "title": "A List Apart" , "url" : "http://alistapart.com", "category" :"Design"},
    {"id": 2, "title": "Robb Wolf" , "url" : "http://robbwolf.com", "category" :"Excercise"},
    {"id": 3, "title": "wimp" , "url" : "http://wimp.com", "category" :"Humor"},
    {"id": 4, "title": "dump" , "url" : "http://dump.com", "category" :"Humor"},
     {"id": 5, "title": "Egghead.io" , "url" : "http://angularjs.org", "category" :"Development"},
    {"id": 6, "title": "One Page Love" , "url" : "http://onepagelove.com", "category" :"Design"},
    {"id": 7, "title": "MobilityWOD" , "url" : "http://www.mobilitywod.com", "category" :"Design"},
    {"id": 8, "title": "Senor Gif" , "url" : "http://memebase.cheezburger.com/senorgif", "category" :"Humor"}
  ];

  $scope.currentCategory = null;

  function setCurrentCategory(category){
  	$scope.currentCategory = category;
  	cancelCreating();
  	cancelEditing();

  }

  function isCurrentCategory(category){
  	$scope.currentCategory !== null && category.name === $scope.currentCategory.name;
  }

  $scope.setCurrentCategory = setCurrentCategory;
  $scope.isCurrentCategory = isCurrentCategory;
  //CRUD
  function resetCreateForm(){
  	$scope.newBookmark = {
  		title: '',
  		url :'',
  		category:$scope.currentCategory.name
  	}
  }

  function createBookmark(bookmark){
  	console.dir(bookmark);
  	bookmark.id = $scope.bookmarks.length;
  	$scope.bookmarks.push(bookmark);

  	resetCreateForm();
  }

  $scope.createBookmark = createBookmark;

   $scope.editedBookmark = null;
   function setEditedBookmark(bookmark){
   	$scope.editedBookmark = angular.copy(bookmark);
   }

   function updateBookmark(bookmark){
   	var index = _.findIndex($scope.bookmarks, function(b){
   		return b.id == bookmark.id
   	});
   	 $scope.bookmarks[index] = bookmark;
   	 $scope.editedBookmark = null;
   	 $scope.isEditing = false;
   }

    function isSelectedBookmark(bookmarkId){
    	return $scope.editedBookmark !== null && $scope.editedBookmark.id === bookmarkId;
    }


   $scope.setEditedBookmark = setEditedBookmark;
   $scope.updateBookmark = updateBookmark;
   $scope.isSelectedBookmark = isSelectedBookmark;


   function deleteBookmark(bookmark){
   	_.remove($scope.bookmarks, function(b){
   		return b.id == bookmark.id;
   	});

   }
    $scope.deleteBookmark = deleteBookmark;


  //Creating and editing states
  
  $scope.isCreating = false;
  $scope.isEditing = false;

  function startCreating(){
 	$scope.isCreating = true;
  	$scope.isEditing = false;
  	resetCreateForm();
  }

  function cancelCreating(){
  	$scope.isCreating = false;
  }

  function startEditing(){
  	$scope.isCreating = false;
  	$scope.isEditing = true;
  }

   function cancelEditing(){
   	$scope.isEditing = false;
   }

   function shouldShowCreating(){
   	return $scope.currentCategory && !$scope.isEditing;
   }

   function shouldShowEditing(){
   	return $scope.isEditing && !$scope.isCreating;

   }
   $scope.startCreating = startCreating;
   $scope.cancelCreating = cancelCreating;
   $scope.startEditing = startEditing;
   $scope.cancelEditing = cancelEditing;
   $scope.shouldShowCreating = shouldShowCreating;
   $scope.shouldShowEditing = shouldShowEditing;

})
