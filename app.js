// Storage Controller

// Item Controller
const ItemCtrl = (function() {
  // Item Constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // Data Structure / State
  const data = {
    items: [
      { id: 0, name: 'Stake dinner', calories: 1200 },
      { id: 1, name: 'Cookie', calories: 300 },
      { id: 2, name: 'Eggs', calories: 400 }
    ],
    currentItem: null,
    totalCalories: 0
  };

  // Public methods
  return {
    logdata: function() {
      return data;
    },
    getItems: function() {
      return data.items;
    }
  };
})();

// UI Controller
const UICtrl = (function() {
  const UISelectors = {
    itemList: '#item-list'
  };

  return {
    // Public methods
    populateItemList: function(items) {
      let html = '';

      items.forEach(function(item) {
        html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong><em>${item.calories} Calories</em>
        <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
      </li>`;
      });

      // Insert list-items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    }
  };
})();
// App Controller
const App = (function(ItemCtrl, UICtrl) {
  return {
    // Public methods
    init: function() {
      // Fetch items from item controller
      const items = ItemCtrl.getItems();

      // Populate list with items
      UICtrl.populateItemList(items);
    }
  };
})(ItemCtrl, UICtrl);

// Initialize app
App.init();
