// Variables
var clickedTab = $(".process-tabs > .active");
var tabWrapper = $(".process-items");
var activeTab = tabWrapper.find(".active");
var activeTabHeight = activeTab.outerHeight();

// Show tab on page load
activeTab.show();

// Set height of wrapper on page load
tabWrapper.height(activeTabHeight);

$(".process-tabs > li").on("click", function() {
  
  // Remove class from active tab
  $(".process-tabs > li").removeClass("active");
  
  // Add class active to clicked tab
  $(this).addClass("active");
  
  // Update clickedTab variable
  clickedTab = $(".process-tabs .active");
  
  // fade out active tab
  activeTab.fadeOut(250, function() {
    
    // Remove active class all tabs
    $(".process-items > div").removeClass("active");
    
    // Get index of clicked tab
    var clickedTabIndex = clickedTab.index();

    // Add class active to corresponding tab
    $(".process-items > div").eq(clickedTabIndex).addClass("active");
    
    // update new active tab
    activeTab = $(".process-items > .active");
    
    // Update variable
    activeTabHeight = activeTab.outerHeight();
    
    // Animate height of wrapper to new tab height
    tabWrapper.stop().delay(50).animate({
      height: activeTabHeight
    }, 100, function() {
      
      // Fade in active tab
      activeTab.delay(50).fadeIn(250);
      
    });
  });
});
