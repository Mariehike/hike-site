// Simulateur de découpage du GR34 (aperçu simplifié de l'appli), page /preparer/.
(function () {
  var V = [["Le Mont-Saint-Michel",0.0],["Beauvoir",2.5],["Roz-sur-Couesnon",13.4],["Saint-Marcan",18.1],["Saint-Broladre",22.7],["Baguer-Pican",27.4],["Cherrueix",28.4],["Dol-de-Bretagne",32.3],["Mont-Dol",34.8],["Le Vivier-sur-Mer",38.5],["Hirel",41.3],["Saint-Benoît-des-Ondes",44.8],["Saint-Méloir-des-Ondes",48.1],["Cancale",56.2],["Saint-Coulomb",69.7],["Saint-Malo",90.0],["La Richardais",100.4],["Dinard",104.0],["Saint-Lunaire",113.8],["Saint-Briac-sur-Mer",122.9],["Lancieux",125.0],["Beaussais-sur-Mer",130.8],["Créhen",133.5],["Saint-Jacut-de-la-Mer",140.7],["Saint-Cast-le-Guildo",153.4],["Matignon",169.7],["Pléboulle",171.0],["Plévenon",184.7],["Fréhel",196.2],["Plurien",200.8],["Erquy",214.7],["Pléneuf-Val-André",220.8],["Hillion",242.1],["Yffiniac",253.8],["Langueux",256.2],["Saint-Brieuc",262.7],["Plérin",273.8],["Pordic",281.1],["Binic-Étables-sur-Mer",286.5],["Saint-Quay-Portrieux",292.6],["Tréveneuc",297.9],["Plouha",306.5],["Lanloup",310.8],["Plouézec",321.1],["Paimpol",331.9],["Ploubazlanec",335.7],["Lézardrieux",357.6],["Lanmodez",366.7],["Pleubian",377.2],["Kerbors",385.9],["Trédarzec",390.7],["Troguéry",394.9],["Tréguier",396.6],["Minihy-Tréguier",396.8],["Plouguiel",398.5],["Plougrescant",408.7],["Penvénan",424.8],["Trévou-Tréguignec",431.1],["Trélévern",435.2],["Louannec",437.2],["Saint-Quay-Perros",440.2],["Perros-Guirec",449.5],["Trégastel",459.7],["Pleumeur-Bodou",473.4],["Trébeurden",485.6],["Lannion",504.7],["Ploulec'h",509.8],["Trédrez-Locquémeau",520.4],["Saint-Michel-en-Grève",527.1],["Plouzélambre",530.1],["Tréduder",531.1],["Plestin-les-Grèves",537.6],["Locquirec",552.3],["Guimaëc",554.6],["Plougasnou",572.7],["Plouezoc'h",591.0],["Morlaix",596.6],["Saint-Martin-des-Champs",600.3],["Taulé",606.9],["Locquénolé",611.8],["Carantec",622.7],["Henvic",629.4],["Saint-Pol-de-Léon",635.7],["Île-de-Batz",645.0],["Roscoff",646.6],["Santec",651.9],["Plougoulm",660.1],["Sibiril",660.4],["Plouescat",679.5],["Tréflez",692.7],["Goulven",694.5],["Plounéour-Brignogan-plages",698.1],["Kerlouan",714.7],["Guissény",723.3],["Plouguerneau",754.1],["Lannilis",756.4],["Landéda",763.1],["Tréglonou",782.0],["Plouguin",788.1],["Saint-Pabu",793.2],["Lampaul-Ploudalmézeau",796.1],["Ploudalmézeau",804.4],["Landunvez",811.6],["Porspoder",819.3],["Lanildut",828.9],["Brélès",830.9],["Lampaul-Plouarzel",839.6],["Trébabu",854.8],["Plougonvelin",871.9],["Locmaria-Plouzané",876.0],["Plouzané",884.8],["Brest",895.6],["Le Relecq-Kerhuon",905.6],["Plougastel-Daoulas",909.5],["Loperhet",913.7],["Logonna-Daoulas",919.5],["Daoulas",921.5],["Hôpital-Camfrout",928.1],["Le Faou",939.8],["Rosnoën",944.6],["Trégarvan",948.8],["Landévennec",957.2],["Lanvéoc",977.6],["Roscanvel",994.9],["Camaret-sur-Mer",1021.1],["Crozon",1056.2],["Telgruc-sur-Mer",1066.8],["Saint-Nic",1075.6],["Plonévez-Porzay",1086.6],["Kerlaz",1092.1],["Douarnenez",1095.8],["Beuzec-Cap-Sizun",1120.1],["Goulien",1129.2],["Cléden-Cap-Sizun",1139.5],["Plogoff",1155.0],["Primelin",1163.1],["Audierne",1172.6],["Plouhinec (Finistère)",1178.7],["Plozévet",1185.5],["Plovan",1196.1],["Tréogat",1202.6],["Tréguennec",1206.3],["Saint-Jean-Trolimon",1211.4],["Penmarch",1227.5],["Guilvinec",1231.4],["Treffiagat",1236.6],["Plobannalec-Lesconil",1241.4],["Loctudy",1248.8],["Pont-l'Abbé",1257.4],["Tréméoc",1261.7],["Combrit",1264.9],["Île-Tudy",1269.3],["Clohars-Fouesnant",1279.8],["Bénodet",1288.3],["Fouesnant",1295.5],["La Forêt-Fouesnant",1311.8],["Concarneau",1324.6],["Trégunc",1342.3],["Névez",1363.2],["Pont-Aven",1371.6],["Riec-sur-Bélon",1386.5],["Moëlan-sur-Mer",1394.0],["Clohars-Carnoët",1439.8],["Guidel",1442.6],["Ploemeur",1457.4],["Larmor-Plage",1468.7],["Port-Louis",1470.3],["Lorient",1479.5],["Lanester",1484.4],["Locmiquélic",1494.8],["Riantec",1495.3],["Merlevenez",1498.0],["Plouhinec (Morbihan)",1504.9],["Belz",1518.9],["Étel",1519.5],["Erdeven",1522.9],["Plouharnel",1535.2],["Saint-Pierre-Quiberon",1544.3],["Quiberon",1555.4],["Carnac",1601.0],["La Trinité-sur-Mer",1610.2],["Saint-Philibert",1620.1],["Locmariaquer",1639.6],["Crach",1646.8],["Auray",1653.0],["Pluneret",1660.3],["Le Bono",1663.8],["Larmor-Baden",1681.4],["Baden",1686.0],["Île-aux-Moines",1689.3],["Arradon",1703.2],["Vannes",1721.5],["Séné",1729.2],["Theix-Noyalo",1759.6],["Le Hézo",1769.4],["Saint-Armel",1778.8],["Sarzeau",1786.3],["Arzon",1822.6],["Saint-Gildas-de-Rhuys",1835.6],["Le Tour-du-Parc",1868.0],["Surzur",1880.4],["Ambon",1891.3],["Damgan",1897.9],["Muzillac",1925.4],["Billiers",1929.1],["Arzal",1940.6],["Camoël",1947.5],["Pénestin",1969.7],["Assérac",1980.7],["Saint-Molf",1985.5],["Mesquer",1995.2],["Piriac-sur-Mer",2007.0],["La Turballe",2016.1],["Guérande",2030.2],["Batz-sur-Mer",2038.9],["Le Croisic",2045.9],["Le Pouliguen",2064.0],["La Baule-Escoublac",2069.2],["Pornichet",2073.7],["Saint-Nazaire",2087.4],["Trignac",2093.7]];
  var dep = document.getElementById('simu-depart');
  if (!dep) return;
  V.forEach(function (v, i) { var o = document.createElement('option'); o.value = i; o.textContent = v[0]; dep.appendChild(o); });
  var idx = V.findIndex(function (v) { return v[0] === 'Dinard'; });
  dep.value = idx < 0 ? 0 : idx;
  var jours = document.getElementById('simu-jours'), km = document.getElementById('simu-km');
  var liste = document.getElementById('simu-etapes'), total = document.getElementById('simu-total');
  function h(k) { var m = Math.round(k / 3.8 * 60 / 5) * 5; return Math.floor(m / 60) + ' h ' + String(m % 60).padStart(2, '0'); }
  function f(x) { return x.toFixed(1).replace('.', ','); }
  function calculer() {
    document.getElementById('simu-jours-val').textContent = jours.value;
    document.getElementById('simu-km-val').textContent = km.value;
    var i = +dep.value, max = +km.value, n = +jours.value, etapes = [];
    for (var d = 0; d < n && i < V.length - 1; d++) {
      var j = i + 1;
      while (j + 1 < V.length && V[j + 1][1] - V[i][1] <= max) j++;
      etapes.push([V[i][0], V[j][0], V[j][1] - V[i][1]]);
      i = j;
    }
    liste.innerHTML = '';
    var somme = 0;
    etapes.forEach(function (e, k) {
      somme += e[2];
      var li = document.createElement('li');
      li.style.animationDelay = (k * 60) + 'ms';
      li.innerHTML = '<span><b></b><small></small></span><span class="km"></span>';
      li.querySelector('b').textContent = e[0] + ' → ' + e[1];
      li.querySelector('small').textContent = 'Jour ' + (k + 1) + ' · environ ' + h(e[2]) + ' de marche';
      li.querySelector('.km').textContent = f(e[2]) + ' km';
      liste.appendChild(li);
    });
    total.textContent = etapes.length ? etapes.length + ' jour' + (etapes.length > 1 ? 's' : '') + ', ' + f(somme) + ' km au total.' : '';
  }
  [dep, jours, km].forEach(function (el) { el.addEventListener('input', calculer); });
  calculer();
})();
