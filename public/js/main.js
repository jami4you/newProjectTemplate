window.app = {};

$(document).ready(function(){
    var $inputs = $("#ui-form input");
    
    //1. Create a UL
    var $ul = $('<ul />', {
      class: "ui-custom"
    });
    
    //3. Foreach input, create an li and an a and append it to the ul
    app.$ul = $ul;
    
    $inputs.each(function(idx, elem){
        var $li = $('<li />',{
            html : $('<a />', {
                class : "input-" + idx,
                href: '#'
            })
        });
        app.$ul.append($li);
     });
    
     //2. Append it to the body
    $("body").append($ul);
    
    $(".ui-custom li a").append($('#tpl').html())
    
    $(".ui-custom li a").on("click", checkBox);
});

function checkBox(evt){
    evt.preventDefault();
    
    var $target = $(evt.target);
    $target.toggleClass('checked');
    var id = $target.attr('class').split('input-')[1];
    $("#checkbox-" + id).prop('checked', 'checked');
    
    //check with checkmark
    toggleCheck($target.parent());
}

function toggleCheck($box){
  var height = $box.find('.layer-1').height();
  if(height == 25){
    showCheck($box.parent());
  } else {
    hideCheck($box.parent());
  }
}

function showCheck($box){  
    $box.find(".layer-1").animate({
        width : '13px'
    }, 20, function(){
        $box.find(".layer-1, .layer-2").animate({
            height : '0px'
        }, 20)   
    }); 
}

function hideCheck($box){  
    $box.find(".layer-1").animate({
        height : '25px'
    }, 20, function(){
    $box.find(".layer-1, .layer-2").animate({
        width : '25px'
    }, 20)
    });   
}