angular.module('Products',['firebase'])
  .factory('Products', function(FURL,$firebaseArray){
    //reference to my database
    var ref= new Firebase(FURL);
    var products = $firebaseArray(ref.child('products'));

    var Products = {
      saveProduct: saveProduct,
      getAllProducts: getAllProducts
    }

    function saveProduct(product,image){

      var newProduct = {
        name: product.name,
        tagline: product.tagline,
        description: product.description,
        price: product.price,
        image: image
      };

      //save object to the database
      return products.$add(newProduct)
        .then(function(data){
          console.log('Cool , we saved the data');
        })
        .catch(function(data){
          console.log('Data did not save successfully');
        });

    };

    function getAllProducts(){
      return products;
    }

    return Products;

  });//end service
