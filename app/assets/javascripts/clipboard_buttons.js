y");
  });

  copyButtons.hover(function() {
    copyTooltip.insertAfter(this);
    copyTooltip.addClass("clipboard-is-hover");
  });

  copyButtons.mouseout(function() {
    copyTooltip.removeClass("clipboard-is-hover");
  });

  copyButtons.mouseout(function() {
    copiedTooltip.removeClass("clipboard-is-active");
  });
});
