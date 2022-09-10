

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
