document.addEventListener("DOMContentLoaded", function () {
  // Scope button and definition
  var scopeButton = document.getElementById("attn1");
  var scopeDef = document.getElementById("scopeDef");

  scopeButton.addEventListener("mouseover", function () {
    scopeDef.style.display = "block";
  });
  scopeButton.addEventListener("mouseout", function () {
    scopeDef.style.display = "none";
  });

  // Schedule button and definition
  var scheduleButton = document.getElementById("attn2");
  var scheduleDef = document.getElementById("scheduleDef");

  scheduleButton.addEventListener("mouseover", function () {
    scheduleDef.style.display = "block";
  });
  scheduleButton.addEventListener("mouseout", function () {
    scheduleDef.style.display = "none";
  });

  // Cost button and definition
  var costButton = document.getElementById("attn3");
  var costDef = document.getElementById("costDef");

  costButton.addEventListener("mouseover", function () {
    costDef.style.display = "block";
  });
  costButton.addEventListener("mouseout", function () {
    costDef.style.display = "none";
  });

  // quality button and definition
  var qualityButton = document.getElementById("attn4");
  var qualityDef = document.getElementById("qualityDef");

  qualityButton.addEventListener("mouseover", function () {
    qualityDef.style.display = "block";
  });
  qualityButton.addEventListener("mouseout", function () {
    qualityDef.style.display = "none";
  });

  // risks button and definition
  var risksButton = document.getElementById("attn5");
  var risksDef = document.getElementById("risksDef");

  risksButton.addEventListener("mouseover", function () {
    risksDef.style.display = "block";
  });
  risksButton.addEventListener("mouseout", function () {
    risksDef.style.display = "none";
  });

  // issues button and definition
  var issuesButton = document.getElementById("attn6");
  var issuesDef = document.getElementById("issuesDef");

  issuesButton.addEventListener("mouseover", function () {
    issuesDef.style.display = "block";
  });
  issuesButton.addEventListener("mouseout", function () {
    issuesDef.style.display = "none";
  });

  // stake button and definition
  var stakeButton = document.getElementById("attn7");
  var stakeDef = document.getElementById("stakeDef");

  stakeButton.addEventListener("mouseover", function () {
    stakeDef.style.display = "block";
  });
  stakeButton.addEventListener("mouseout", function () {
    stakeDef.style.display = "none";
  });

  // admin button and definition
  var adminButton = document.getElementById("attn8");
  var adminDef = document.getElementById("adminDef");

  adminButton.addEventListener("mouseover", function () {
    adminDef.style.display = "block";
  });
  adminButton.addEventListener("mouseout", function () {
    adminDef.style.display = "none";
  });

  // appr button and definition
  var apprButton = document.getElementById("attn9");
  var apprDef = document.getElementById("apprDef");

  apprButton.addEventListener("mouseover", function () {
    apprDef.style.display = "block";
  });
  apprButton.addEventListener("mouseout", function () {
    apprDef.style.display = "none";
  });
});
