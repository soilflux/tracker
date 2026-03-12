var animalID = '';
var rainbowFlag = false;
var rainbowFlagFlag = false;
var yamiFailFlag = false;
var yamiFlag = false;
var yamiFlagFlag = false;
var quest1Flag = false;
var forestItems = 0;
var angelFailFlag = false;
var angelFlag = false;
var angelFlagFlag = false;
var questCounter = 0;

var tabPicSources = ["./tab_pics/circus_tent.png", "./tab_pics/camel.png", "./tab_pics/tiger.png", "./tab_pics/clown.png", "./tab_pics/elephant.png", "./tab_pics/leopard.png", "./tab_pics/rhino.png", "./tab_pics/juggler.png", "./tab_pics/zebra.png", "./tab_pics/bear.png", "./tab_pics/crocodile.png", "./tab_pics/monkey.png", "./tab_pics/hippo.png", "./tab_pics/seal.png", "./tab_pics/llama.png", "./tab_pics/dog.png", "./tab_pics/horse.png", "./tab_pics/cat.png", "./tab_pics/kurama.png", "./tab_pics/merry.png", "./tab_pics/articuno.png"]
var tabPicSourcesRB = ["./tab_pics/circus_tentRB.png", "./tab_pics/camelRB.png", "./tab_pics/tigerRB.png", "./tab_pics/clownRB.png", "./tab_pics/elephantRB.png", "./tab_pics/leopardRB.png", "./tab_pics/rhinoRB.png", "./tab_pics/jugglerRB.png", "./tab_pics/zebraRB.png", "./tab_pics/bearRB.png", "./tab_pics/crocodileRB.png", "./tab_pics/monkeyRB.png", "./tab_pics/hippoRB.png", "./tab_pics/sealRB.png", "./tab_pics/llamaRB.png", "./tab_pics/dogRB.png", "./tab_pics/horseRB.png", "./tab_pics/catRB.png", "./tab_pics/kuramaRB.png", "./tab_pics/merryRB.png", "./tab_pics/articunoRB.png"]
var numberOfAnimals = tabPicSources.length;
var animalXP = new Array(numberOfAnimals).fill(0);
var savedAnimalXP = new Array(numberOfAnimals).fill(0);
if (localStorage.getItem("quest1")) { document.getElementById("quest1").value = localStorage.getItem("quest1"); }
if (localStorage.getItem("animalXP")) {
  savedAnimalXP = JSON.parse(localStorage.getItem("animalXP"));
  for (var i = 0; i < savedAnimalXP.length; i++) {
    savedAnimalXP[i] = Math.floor(savedAnimalXP[i]);
    animalXP[i] = savedAnimalXP[i];
  }
}
var quest1Mults = new Array(numberOfAnimals).fill(1);
if (localStorage.getItem("quest1Mults")) {
  savedQuest1Mults = JSON.parse(localStorage.getItem("quest1Mults"));
  for (var i = 0; i < savedQuest1Mults.length; i++) {
    quest1Mults[i] = savedQuest1Mults[i];
  }
}
for (var i = 0; i < animalXP.length; i++) {
  animalXP[i] *= quest1Mults[i];
}

var yamiMults = new Array(numberOfAnimals).fill(1);
if (localStorage.getItem("yamiMults")) {
  savedYamiMults = JSON.parse(localStorage.getItem("yamiMults"));
  for (var i = 0; i < savedYamiMults.length; i++) {
    yamiMults[i] = savedYamiMults[i];
  }
}
for (var i = 0; i < animalXP.length; i++) {
  animalXP[i] *= yamiMults[i];
}

var angelMults = new Array(numberOfAnimals).fill(1);
if (localStorage.getItem("angelMults")) {
  savedAngelMults = JSON.parse(localStorage.getItem("angelMults"));
  for (var i = 0; i < savedAngelMults.length; i++) {
    angelMults[i] = savedAngelMults[i];
  }
}
for (var i = 0; i < animalXP.length; i++) {
  animalXP[i] *= angelMults[i];
}

var rainbowMults = new Array(numberOfAnimals).fill(1);
if (localStorage.getItem("rainbowMults")) {
  savedrainbowMults = JSON.parse(localStorage.getItem("rainbowMults"));
  for (var i = 0; i < savedrainbowMults.length; i++) {
    rainbowMults[i] = savedrainbowMults[i];
  }
}
for (var i = 0; i < animalXP.length; i++) {
  animalXP[i] *= rainbowMults[i];
}

var myAnimalXP = { "circus_tent": animalXP[0], "camel": animalXP[1], "tiger": animalXP[2], "clown": animalXP[3], "elephant": animalXP[4], "leopard": animalXP[5], "rhino": animalXP[6], "juggler": animalXP[7], "zebra": animalXP[8], "bear": animalXP[9], "crocodile": animalXP[10], "monkey": animalXP[11], "hippo": animalXP[12], "seal": animalXP[13], "llama": animalXP[14], "dog": animalXP[15], "horse": animalXP[16], "cat": animalXP[17], "kurama": animalXP[18], "merry": animalXP[19], "articuno": animalXP[20] }
localStorage.setItem("myAnimalXP", JSON.stringify(myAnimalXP));

var animalRNG = Math.floor(Math.random() * tabPicSources.length)

function rollAnimal() {
  animalID = elem.id;
  animalLV = animalXP.slice(0);
  highestXPAnimals = Object.keys(myAnimalXP).sort(function (a, b) { return -(myAnimalXP[a] - myAnimalXP[b]) });
  for (var n = 0; n < highestXPAnimals.length; n++) {
    document.getElementById('desiredAnimal').innerHTML += '<option value="' + highestXPAnimals[n] + '">' + highestXPAnimals[n].replace("_", " ") + '</option>'
  }
  if (localStorage.getItem("desiredAnimal")) {
    document.getElementById("desiredAnimal").value = localStorage.getItem("desiredAnimal");
  }
  if (document.getElementById('desiredAnimal').value != 'random') {
    highestXPAnimals.splice(highestXPAnimals.indexOf(document.getElementById('desiredAnimal').value), 1);
    highestXPAnimals.unshift(document.getElementById('desiredAnimal').value);
  }

  for (var n = 0; n < highestXPAnimals.length; n++) {
    thisAnimalsLevel = Math.max(Math.floor(2.5 * Math.sqrt(myAnimalXP[highestXPAnimals[n]]) - 1), 0);
    if (document.getElementById('desiredAnimal').value == highestXPAnimals[n]) {
      thisAnimalsLevel += 2;
    }
    for (var m = 0; m < thisAnimalsLevel; m++) {
      if (Math.random() < 0.5) {
        if (tabPicSources[animalRNG].includes(highestXPAnimals[n])) { n = 1000000000; m = 1000000000 }
        else animalRNG = Math.floor(Math.random() * tabPicSources.length)
      }
    }
  }
  rolledAnimalsLevel = Math.max(Math.floor(2.5 * Math.sqrt(animalXP[animalRNG]) - 1), 0);
  if (rolledAnimalsLevel >= 5) {
    document.getElementById("quest1Label").style.display = "inline-block";
    document.getElementById("quest1").style.display = "inline-block";
  }

  elem.src = tabPicSources[animalRNG];
  elem.onclick = toggleLinsoGoMode;

  if (Math.random() < Math.min(rolledAnimalsLevel / 1000, 0.5)) {
    elem.src = tabPicSourcesRB[animalRNG];
    rainbowFlag = true;
  }
  document.getElementById("seedsDone").innerHTML = 'seeds as companion: ' + savedAnimalXP[animalRNG];
  document.getElementById("rainbowChance").innerHTML = 'rainbow aminalution: ' + (Math.min(rolledAnimalsLevel / 1000, 0.5) * 100).toFixed(1) + '%';
  document.getElementById("rainbowMult").innerHTML = 'rainbow XP multiplier: ' + rainbowMults[animalRNG];
  document.getElementById("yamiChance").innerHTML = 'yami aminalution: ' + (Math.min(rolledAnimalsLevel / 200, 0.125) * 100).toFixed(1) + '%';
  document.getElementById("yamiMult").innerHTML = 'yami XP multiplier: ' + yamiMults[animalRNG];
  document.getElementById("angelChance").innerHTML = 'angel aminalution: ' + (Math.min(rolledAnimalsLevel / 200, 0.125) * 100).toFixed(1) + '%';
  document.getElementById("angelMult").innerHTML = 'angel XP multiplier: ' + angelMults[animalRNG];
  document.getElementById("quest1Mult").innerHTML = 'quest 1 XP multiplier: ' + quest1Mults[animalRNG].toFixed(2);

  document.getElementById("animalLV").innerHTML = elem.src.slice(44, elem.src.length - 4).replace("RB", "") + " LVL " + rolledAnimalsLevel;
  if (tabPicSources[animalRNG].includes(highestXPAnimals[0])) {
    document.getElementById("rollChance").innerHTML += "roll chance:" + ((1 - Math.pow((numberOfAnimals - 1) / numberOfAnimals, (rolledAnimalsLevel + 2) / 2 + 1)) * 100).toFixed(1) + "%";
  }
}

function trackAnimalQuest() {
  questCounter += 1;
  document.getElementById("quest1").disabled = true;
  if (lastCheck[lastCheck.length - 1].startsWith("forest_")) forestItems += 1;

  if (forestItems >= 4
    && !quest1Flag
    && document.getElementById("quest1").style.display != "none"
    && document.getElementById("quest1").value == "4ForestItems") {
    quest1Flag = true;
    if (!simActive) quest1Mults[animalRNG] += 0.21;
    else quest1Mults[animalRNG] += 0.21 / 4;
    localStorage.setItem("quest1Mults", JSON.stringify(quest1Mults));
  }

  if (player.sling
    && !player.bombs
    && !quest1Flag
    && document.getElementById("quest1").style.display != "none"
    && document.getElementById("quest1").value == "slingshotBeforeBombbag") {
    quest1Flag = true;
    if (!simActive) quest1Mults[animalRNG] += 0.07;
    else quest1Mults[animalRNG] += 0.07 / 4;
    localStorage.setItem("quest1Mults", JSON.stringify(quest1Mults));
  }

  if (player.bombs3
    && player.sling3
    && !quest1Flag
    && document.getElementById("quest1").style.display != "none"
    && document.getElementById("quest1").value == "3BombbagsAnd3Slingshots") {
    quest1Flag = true;
    if (!simActive) quest1Mults[animalRNG] += 0.14;
    else quest1Mults[animalRNG] += 0.14 / 4;
    localStorage.setItem("quest1Mults", JSON.stringify(quest1Mults));
  }

  if (player.nocturne && Math.random() < Math.min(rolledAnimalsLevel / 200, 0.125) && !yamiFailFlag) {
    document.getElementById("linso54").style.filter = "brightness(1.5) invert(100%)";
    yamiFlag = true;
  }
  else if (player.nocturne) {
    yamiFailFlag = true;
  }

  if (player.requiem && Math.random() < Math.min(rolledAnimalsLevel / 200, 0.125) && !angelFailFlag) {
    angelFlag = true;
    document.getElementById('halo').style.opacity = 1;
  }
  else if (player.requiem) {
    angelFailFlag = true;
  }

  if (questCounter >= 20) {
    if (simActive && document.getElementById("simSeed").value > 0) document.getElementById("simSeed").value = parseInt(document.getElementById("simSeed").value) + 1;

    if (!simActive) savedAnimalXP[animalRNG] += 1;
    else savedAnimalXP[animalRNG] += 0.25;
    questCounter = -100000
    localStorage.setItem("animalXP", JSON.stringify(savedAnimalXP));
  }

  if (questCounter < -9000 && yamiFlag && !yamiFlagFlag) {
    if (!simActive) yamiMults[animalRNG] += 0.2;
    else yamiMults[animalRNG] += 0.2 / 4;
    yamiFlagFlag = true;
    yamiMults[animalRNG] = parseFloat(yamiMults[animalRNG].toFixed(1))
    localStorage.setItem("yamiMults", JSON.stringify(yamiMults));
  }

  if (questCounter < -9000 && angelFlag && !angelFlagFlag) {
    if (!simActive) angelMults[animalRNG] += 0.2;
    else angelMults[animalRNG] += 0.2 / 4;
    angelFlagFlag = true;
    angelMults[animalRNG] = parseFloat(angelMults[animalRNG].toFixed(1))
    localStorage.setItem("angelMults", JSON.stringify(angelMults));
  }

  if (questCounter < -9000 && rainbowFlag && !rainbowFlagFlag) {
    if (!simActive) rainbowMults[animalRNG] += 1;
    else rainbowMults[animalRNG] += 1 / 4;
    rainbowFlagFlag = true;
    localStorage.setItem("rainbowMults", JSON.stringify(rainbowMults));
  }
}	