
  enableGemScopeCheckboxes.click(function() {
    toggleGemSelector();
  });

  function toggleGemSelector() {
    var isApplicableGemScopeSelected = enableGemScopeCheckboxes.is(":checked");
    var gemScopeSelector = $("#api_key_rubygem_id");

    if (isApplicableGemScopeSelected) {
      gemScopeSelector.removeAttr("disabled");
      removeHiddenRubygemField();
    } else {
      gemScopeSelector.val("");
      gemScopeSelector.prop("disabled", true);
      addHiddenRubygemField();
    }
  }

  function addHiddenRubygemField() {
    $("<input>").attr({
      type: "hidden",
      id: hiddenRubygemId,
      name: "api_key[rubygem_id]",
      value: ""
    }).appendTo(".t-body form .api_key_rubygem_id_form");
  }

  function removeHiddenRubygemField() {
    $("#" + hiddenRubygemId + ":hidden").remove();
  }
});
