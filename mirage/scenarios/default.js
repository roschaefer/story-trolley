export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);
  //server.createList('product', 10);
  server.loadFixtures('products');
  server.loadFixtures('product-rfids');
  server.loadFixtures('product-details');

}
