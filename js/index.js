//TECHNICAL
var TechnicalFirst = ["Anti-","Bi-","De-","Duo-","Contra-","Epi-","Extra-","Hyper-","Infra-","Intra-","Iso-","Macro-","Micro-","Mono-","Multi-","Non-","Omni-","Para-","Posi-","Post-","Pre-","Quasi-","Re-","Semi-","Sub-","Super-","Thermal-","Trans-","Tri-","Un-","Uni-"];
var TechnicalSecond = ["cyclic","dimensional","electromagnetic","electrostatic","focal","ionic","linear","matter","modal","modulating","molecular","orbital","organism","phasic","polar","pulse","random","shifting","static","stereo","tachyon","temporal","tronic"];
var TechnicalThird = ["auxiliary","beam","coolant","deflection","distortion","fluctuation","flux","graviton","guidance","impedance","impulse","luminescence","particle","pattern","phase","thermal","plasma","quantum","ray","reflection","refraction","resistance","warp","wave"];
var TechnicalFourth = ["accelerator","adjustment","algorithm","array","buffer","calibrator","circuit","coil","configuration","core","deflector","emitter","field","filament","generator","grid","interlock","interocitor","matrix","processor","ratio","transmitter","transponder","translator"];

function Technical()
{
  var writeA = TechnicalFirst[Math.floor(Math.random()*TechnicalFirst.length)];
  var writeB = TechnicalSecond[Math.floor(Math.random()*TechnicalSecond.length)];
  var writeC = TechnicalThird[Math.floor(Math.random()*TechnicalThird.length)];
  var writeD = TechnicalFourth[Math.floor(Math.random()*TechnicalFourth.length)];

document.getElementById("MainViewer").innerHTML=writeA+writeB+" "+writeC+" "+writeD;
}


//UNHEALTH
var UnhealthFirst = ["Agition", "Bleeding","Burns","Carbonation","Cataplecatation","Cholorisation","Contractions","Cretinism","Decay","Destruction","Deterioration","Discolourment","Disease","Disintegration","Distemperment","Distortion","Emesis","Meteorism","Moritfication","Nerve Damage","Neuritis","Nuclear degenaration","Paralysis","Rheumatism","Sickness","Stoppage","Swelling"];
var UnhealthSecond = ["across the","alongside the","around the","beneath the","behind the","below the","between the","of the","to the","inside the","into the","next to the","on top of the","throughout the","towards the","underneath the",];
var UnhealthThird = ["abdomen","adrenal gland","ankle","appendix","arm","artery","ball of the foot","bladder","blood","blood-vessels","body","bone","brain","breast","calf","cardiovascular system","cheek","chest","chin","cervical vertebrae","cerebrum","circulatory system","clavicle","collor bone","crown","digestive-tract","duodenum","ear","elbow","endocrine system","esophagus","eye","eyelid","face","fallopian tubes","feet","femur","fibula","fingers","foot","genitalia","giblets","glands","gums","hair","hand","head","heart","hip","humerus","ilium","immune system","intestines","iris","kidneys","knee","leg","ligament","lip","liver","lungs","lumbar vertebrae","lymph node","mandible","mouth","muscle","nail","navel","nerves","nostril","organs","ovary","palm","pancreas","phalanges","pituitary glands","pupils","red blood cells","respitory system","marrow","ribs","skeleton","skin","skull","spinal column","spleen","sternum","stomach","teeth","throat","thyroid","tibia","toe","torso","ulna","urinary system","veins","vertebra","trachea","waist","white blood cells","wrists"];

function Unhealth()
{
 
  var writeE = UnhealthFirst[Math.floor(Math.random()*UnhealthFirst.length)];
  var writeF = UnhealthSecond[Math.floor(Math.random()*UnhealthSecond.length)];
  var writeG = UnhealthThird[Math.floor(Math.random()*UnhealthThird.length)];

document.getElementById("MainViewer").innerHTML=writeE+" "+writeF+" "+writeG;
}


//COMPUTER
var ComputerFirst = ["Accelerated","Activated", "Adaptive", "Allocated", "Analyzed","Applied","Assembled", "Assessed", "Assigned", "Authored", "Balanced", "Calculated", "Catalogued", "Changed","Channeled", "Coded", "Collected", "Compared", "Compiled", "Completed", "Computed","Conceived","Consolidated", "Created", "Critiqued", "Defined", "Delegated","Delivered", "Demonstrated", "Derived","Designed", "Detected","Diagnosed","Discovered", "Displayed", "Distributed","Effected", "Established", "Estimated", "Evaluated", "Examined", "Exchanged", "Executed", "Exercised", "Exhibited", "Expanded", "Expedited", "Experimented", "Explained", "Explored", "Facilitated", "Focused", "Forecasted", "Formulated", "Fostered", "Grouped", "Guided", "Identified",  "Implemented", "Imposed", "Improved", "Increased", "Initiated", "Inquired", "Installed", "Interpreted", "Introduced", "Located", "Modeled", "Modified","Obtained", "Outlined", "Perceived", "Predicted", "Programmed", "Recorded","Reduced", "Regulated", "Reinforced", "Rendered","Represented", "Reproduced", "Restored", "Retrieved", "Revised", "Routed", "Selected", "Shared", "Simplified", "Specified",  "Suggested","Supported", "Synthesized", "Targeted", "Tested", "Updated", "Verified"];
var ComputerSecond = ["FTL drive","ablative armor","abutment","aceton assimilator","adaptive interface link","alternative warp drive","ampheorn","amplitude","analysis","angle","annular confinement beam","annular confinement beam","anti-matter","anti-time","antigrav thrusters","antigrav","anyons","assembly","axis","axle","balance","battery","bearing","biofilter","calculation","cast rodinium part","cell","circumference","combustion","comlink","communication","compact trichyon machine","component","concept","control set","conversion","convertor","coupling","crank-cycle","current","curve","degree","depth","design","device","dilithium chamber wall","dimension","direction","distribution","electrical","electro-plasma regulator","electronics","element","energy","excavation","fabrication","flow distributor","flow","fluid","force","frame","friction","fuel","fulcrum","gear","generator","grade stop","gravitron","hardware","heat","hoist","hydraulic","installation","instrument","intersection","isochronious asymmetric compensator","isolinear enhancer","isolinear inducer","isolinear phase inverter","joint","load","machine", "system","measurement","modular","motor","object","operation","oscilloscope","power generator","precision cell","quantum regulator","refrigeration filament","regulation","revolution","rotation","scheme","sequence","shape","structure","superstructure","technology","transformer","transmission","artificial turbine","vacuum","ventilator","voltage","warp core matrix flux capacitor","warp drive","warp shell"];
var ComputerThird = ["acheived maximum capacity","can not be accessed","can not be scheduled","have been articulated","is arranged incorrectly","is unaligned","is automated without access","has been activated","has cracked","nas been re-routed", "is wedged","collapsed","is bent unproportionally","is out of grid parameters","has shattered","is about to seize","jammed","has burned","has exploded","does not match", "is non-congruent","is undefined","is indecipherable","is non-accessible","cannot be reproduced", "is non-fractoral","is at a high tempurature","have crystalized","is untraceable","cannot be found","has acheived full-gravity","can not be repaired","should be monitored","should be observed","is not recommended"];

function Computer()
{
  var writeH = ComputerFirst[Math.floor(Math.random()*ComputerFirst.length)];
  var writeI = ComputerSecond[Math.floor(Math.random()*ComputerSecond.length)];
  var writeJ = ComputerThird[Math.floor(Math.random()*ComputerThird.length)];

document.getElementById("MainViewer").innerHTML=writeH+" "+writeI+" "+writeJ;
}


//Countermeasure
var CountermeasureFirst = ["Agitate","Amplify","Balance","Boost","Concentrate","Connect","Convert","Correlate","Counteract","Decrease","Electrify","Elimainate","Energise","Extend","Fluctuate","Focus","Harmonise","Increase","Intensify","Invert","Modify","Modulate","Monitor","Nullify","Oscillate","Overload","Pacify","Pressurise","Recalibrate","Recollimate","Reconfigure","Redirect","Reroute","Reset","Restrict","Reverse","Synchronise"];
var CountermeasureSecond = ["accelerated","ambient","anomalous","anterior","astrophysical","asymmetrical","atmospheric","auxiliary","backup","emergency","inverted","ionic","linear","magnatomic","magnetic","master","microscopic","modulated","nucleonic","nucleonic","phased","photonic","positronic","primary","quantum","rapid","reciprocating","secondary","sonic","temporal","tertiary","thermal","transwarp","trifold","verteron","warp"];
var CountermeasureThird = ["E-M", "access", "alternating", "artificial", "baryon", "charge", "compression", "dampening", "data", "diagnostic","flux","frequency","gravimetric","interface","load","mass","nadion","nanite","nano","neutrino","override","particle","plasma","polaron","positron","proton","pulse","quantum","radiation","space-time","spatial","subspace","system","tachyon","tetryon","wavefront"];
var CountermeasureFourth = ["accelerator","actuator","array","banks","booster","buffer","capacitor","configuration","container","continuum","controller","coupling","discriminator","distortion","disturbance","domain","effect","emission","field","filter","generator","harmonic","interference","invariance","inversion","manifold","mutation","phenomenon","relay","safeguard","seal","signal","stabilizer","stream","transponder","variance", "or change the gravitational constant of the universe"];

function Countermeasure()
{
  var writeK = CountermeasureFirst[Math.floor(Math.random()*CountermeasureFirst.length)];
  var writeL = CountermeasureSecond[Math.floor(Math.random()*CountermeasureSecond.length)];
  var writeM = CountermeasureThird[Math.floor(Math.random()*CountermeasureThird.length)];
  var writeN = CountermeasureFourth[Math.floor(Math.random()*CountermeasureFourth.length)];

document.getElementById("MainViewer").innerHTML=writeK+" the "+writeL+" "+writeM+" "+writeN;
}


//COMPOSITION - PERIODIC TABLE OF ELEMENTS
var CompositionFirst = ["Actinium","Adamantine","Aluminum","Americium","Antimony","Archerite","Argon","Arsenic","Astatine","Barium","Berkelium","Beryllium","Bismuth","Bohrium","Boron","Bromine","Byzanium","Cadmium","Calcium","Californium","Carbon","Carbondium","Cerium","Cesium","Chlorine","Chromium","Chronoton","Cobalt Thorium G","Cobalt","Copernicium","Copper","Corbomite","Curium","Darmstadtium","Dilithium","Divinium (E115)","Dubnium","Duranium","Dysprosium","Einsteinium","Element 99","Element Zero","Erbium","Europium","Fermium","Flerovium","Fluorine","Francium","Frinkonium","Gadolinium","Gallium","Germanium","Gold","Hafnium","Hassium","Helium","Holmium","Hydrogen","Indium","Iodine","Iridium","Iron","Kironide","Lanthanum","Lawrencium","Lead","Lithium","Livermorium","Lutetium","Magnesium","Manganese","Meitnerium","Mendelevium","Mercury","Meteorillium","Mithril","Molybdenum","Neodymium","Neon","Neptunium","Neutronium","Nickel","Niobium","Nitrogen","Nobelium","Octiron","Omega Molecule","Osmium","Oxygen","Palladium","Pergium","Phosphorus","Platinum","Plutonium","Polonium","Polydenum","Potassium","Praseodymium","Promethium","Protactinium","Protomatter","Quadium","Radium","Radon","Rearden Metal","Red-Matter", "Rhenium", "Rhodium", "Roentgenium","Rubidium","Ruthenium","Rutherfordium","Samarium","Scandium","Seaborgium","Selenium","Silicon","Silver","Sodium","Strontium","Sulfur","Tantalum","Technetium","Tellurium","Terbium","Thallium","Thorium","Thulium","Tin","Titanium","Trellium-D","Trilithium","Tritanium","Tritanium","Tungsten","Undefined","Unknown","Ununbium","Ununhexium","Ununoctium","Ununpentium","Ununquadium","Ununseptium","Ununtrium","Ununumium","Uranium","Vanadium","Vibranium","Xenon","Xirdalium","Ytterbium","Yttrium","Zinc","Zirconium"];

function Composition()
{
  var writeO = [(Math.random()*(42 - 0)).toFixed(3)];    
  var writeP = CompositionFirst[Math.floor(Math.random()*CompositionFirst.length)];

document.getElementById("MainViewer").innerHTML="Main Composition results: "+writeO+"%"+" "+writeP;
}


//ADVENTURE
var QuandaryFirst = ["A Rogue Captian","Alien Brain Worms","Breen","Cardassians","Cyber Zombies","The Jem-Hadar","Klingons","Krenim","Romulans","Section 31","Species 8472","The Founders","The Acamarian","The Allasomorph ","The Borg","The Dominion","The Doomsday Machine","The Hirogen","The Hive Armada","The Maquis","The Q Continuum","The Suliban","The Xindi","Tholians"];
var QuandarySecond = ["amplify", "bond with","capture","corrupt","destroy","eradicate","occupy","steal","synthesize"];
var QuandaryThird = ["alien artifact","ancient space ruin","quantum tunnel","star dreadnought","void crystals","wormhole"];
var QuandaryFourth = ["that would","which would","that might","that will"];
var QuandaryFifth = ["cause an interdimensional continuum loop","create a hole in space","destroy the planet","destroy the solar system","enslave the planet","reverse time","rip a hole in the space-time continuum","start a war","trigger the invasion","cause planet-wide genocide","tear apart the ship","cause ship-wide hallucinations","the atmosphere to collapse","cause the oceans to evaporate","create a static warp bubble","remove a dimension"];
function Quandary()
{
  var writeQ = QuandaryFirst[Math.floor(Math.random()*QuandaryFirst.length)];
  var writeR = QuandarySecond[Math.floor(Math.random()*QuandarySecond.length)];
  var writeS = QuandaryThird[Math.floor(Math.random()*QuandaryThird.length)];
  var writeT = QuandaryFourth[Math.floor(Math.random()*QuandaryFourth.length)];
  var writeU = QuandaryFifth[Math.floor(Math.random()*QuandaryFifth.length)];

document.getElementById("MainViewer").innerHTML=writeQ+" "+writeR+" "+"the"+" "+writeS+" "+writeT+" "+writeU;
}


//NPC NAMES
var NPCFirst = ["Civilian","Captain","Commander","Lieutenant Commander","Lieutenant","Lieutenant Junior Grade","Ensign","Grand Petty Officer","Non-Commissioned Officer","Major","Sub-Commander","Admiral","Vice-Admiral","Rear-Admiral","SCPO","Chancellor","Regent","Intendant","Sergeant","First-year Cadet","Second-year Cadet","Third-year Cadet","Fourth-year Cadet","Petty officer","Senior Chief Officer","One-Star Admiral","Four-Star Admiral","Fleet Admiral"];
var NPCSecond = ["Abelia","Aeliana", "Albia", "Amica", "Annia", "Aphra", "Aquilia", "Argentia", "Arria", "Atarah", "Athalia", "Aurelia", "Avita", "Basilia", "Beata", "Calvina", "Campana", "Candida", "Cassia", "Clemencia", "Columba", "Constantina", "Crispina", "Cyra", "Damaris", "Damiane", "Decima", "Delicia", "Dominica", "Drusilla", "Elizabella", "Fabia", "Fannia", "Fausta ", "Faustina", "Felicia", "Flavia", "Florentina",  "Fortunata", "Gaia", "Galla", "Gaynor", "Gwenore", "Hilaria", "Honoria", "Horatia", "Isolde", "Jennet", "Jonet", "Junia", "Juno", "Justina", "Laelia", "Laurentia", "Ligeia", "Livia", "Lucia", "Lucilla", "Lucretia", "Mahala", "Marciana", "Marilla", "Maxima", "Melisent", "Meriall", "Mila", "Minerva", "Mucia", "Nerilla", "Nicasia", "Octavia", "Paccia", "Palantina", "Perpetua", "Persis", "Phillida", "Placidia", "Prima", "Quintia", "Rufina", "Sabina", "Septima", "Sergia", "Severina", "Silvia", "Tanaquil", "Tauria", "Tertia", "Titiana", "Tullia", "Turia", "Urbana", "Valentina", "Valeria", "Varinia", "Verina", "Viviana", "Howard", "Rosalba", "Marcela",  "Brigitte", "Gerry", "Francisco",   "Garrett", "Sasha", "Judson",   "Lamonica",   "Norman",   "Tess",   "Horace",   "Janette",   "Randy",   "Debi",   "Meda", "Zana",   "Corene",   "Ivette",   "Taunya",   "Apolonia",   "Catalina",   "Agatha",   "Tamera",   "Jeffry",   "Florentino",   "Glennie",   "Benny",    "Hallie",   "Hazel",   "Eustolia",   "Chasity",   "Daniela", "Adrian",   "Rosamaria",   "Luz",   "Roselle",   "Pauline",   "Ingrid",   
"Arletta",   "Jacques",   "Ailene",   "Moriah",   "Lawana",   "Shaunna",   "Millard",   "Sid",   "Leonia",   "Luciana",    "Zelina"];
var NPCThird = ["Harrington", "Choi", "Pollard", "Horn", "Reeves", "Allison", "Campbell", "Lang", "Humphrey", "Cantu", "Burton", "Alvarez", "Brennan", "Arellano", "Mathews", "Rowe", "Rivera", "Harmon", "Hess", "Robbins", "Roach", "Murillo", "Turner", "Browning", "Vang", "Morales", "Jordan", "Lynn", "Beard", "Ewing", "Savage", "Hogan", "Bruce", "Ali", "Leonard", "Knox", "Townsend", "Dawson", "Miles", "Hardy", "Jefferson", "Cortez", "Ingram", "Riddle", "Cooley" ,"Alexander", "Walters", "Cowan", "Flowers", "Prince ", "Turner", "Mcintosh", "Cline", "Lewis", "Sanders", "Walton", "Key", "Mooney", "Hahn", "Ramirez", "Rosales", "Navarro", "Pugh", "Santos", "Mendez" ,"Combs", "Nicholson", "Cooper", "Shea", "Delgado", "Gomez", "Drake", "Conrad", "Miles", "Powers", "Hobbs", "Willis", "Donaldson", "Barajas", "Short", "Gordon", "Chung", "Roach", "Wolf", "Ball", "Gamble", "Rosario", "Vargas", "Cummings", "Valencia", "Nguyen", "Duarte", "Stark", "Jefferson", "Pineda", "Barton", "Weber", "Edwards", "Gibbs", "Rubio"]
function NPC()
{
  var writeV = NPCFirst[Math.floor(Math.random()*NPCFirst.length)];
  var writeW = NPCSecond[Math.floor(Math.random()*NPCSecond.length)];
  var writeX = NPCSecond[Math.floor(Math.random()*NPCSecond.length)];
document.getElementById("MainViewer").innerHTML=writeV+" "+writeW+" "+writeX;
}


//EPICURE
var EpicureFirst = ["Algae puffs","Allis pate","Alterian chowder","Andorian Redbat","Andorian tuber root","Angla’bosqye","Aubergine stew","Azna","Bacon and eggs","Bantan","Beets","Blackened Redfish","Bloodworm tartare", "Bread pudding souffle","Brigit lung", "Brill cheese","Canapes","Caviar","Chadre’kab","Chee’lash","Chicken a la Sisko","Chicken paprikas","Chili burritos","Chili sauce","Corn on the cob","Corn salad","Couscous","Creole shrimp with Mandalay sauce", "Crown roast of lamb","Delavian chocolate","Delovian shuffle","Deviled eggs","Deviled wood throk","Eggs benedict with asparagus","Eskarian egg","Feragoit goulasah","Fish","Flambe noodles","Foot-long hot dog","French onion soup","Fricandeau stew","Fungilli","Gabarosti stew","Gagh","Gelada onion crisps","Gladst","Gramillian sand peas","Green beans","Greenbread","Gumbo","Hasperat","Heart of targ","Hiaka soup","Hot dog","Iarish pie","Iokar beans","Iorella","Jambalaya","Jibalian seven-spice omellete","Kalavian biscuits","Kalo","Kava","Kohlanese barley","Kohlanese stew","Lamb stew","Latara Broth","Laurelian pudding","Leola root soup","Leola root stew","Linguini","Macaroni and Cheese","Makapa bread","Mantickian pate","Meridian fruit","Murt cake","Mushroom soup","New York cheesecake","Nondoran tomato paste","Nutrient Suspension","Oatmeal","Orellius pear","Orion wing slugs","Oskoid","Owon eggs","O’Brien’s favorite","Paraka wings","Parthus a la Yuta","Pasta boudin","Peanut butter and jelly sandwich","Pendrashian cheese","Petrokian sausage","Piomeek Soup","Pipius claw","Porakan eggs","Pot roast","Potato casserole","Potatoes","Prime Rib","Racht","Ratamba stew","Regova egg","Regrean wheat husks","Rice","Risan beans","Rokeg blood pie","Romulan mollusks","Romulan soup","Sausage","Sem-hal stew","Senarian Egg Broth","Seyetik’s stew","Shrimp Creole","Shrimp with fettran sauce","Silmic wine","Souffle","Soup","Spinach linguini","Spinach","Split pea soup","Stewed tomatoes and dehydrated eggs","Stew","Stuffed Cardaway leaves","T-bone steak","Takar Loggerhead eggs","Takka berries with Cherel sauce","Takka berries","Targ","Tojal","Tomato soup","Trellan crepes","Tube grubs","Turkey","Tuwaly pie","Uttaberries","Vacuum-packed oatmeal","Vak clover soup","Varmelite fiber","Vegetable Boullion soup","Veklava","Vermicular","Vulcan mollusks","Whole green putillos","Yamok Sauce","Yigrish cream pie","Yorkshire pudding","Zabee nuts","Zabu stew","Zero-g ration","Zilm-kach","Maaza stalks"," Superbeef","Fiesta Salad","Pok Tar","Quintotriticale","Soba Noodles","Vulcan root leaf"];
var EpicureSecond = ["Arakonian dessert","Banana split","Candy bar","Cherry Pie","Chocolate Bar", "Chocolate cake","Chocolate sundae","Chocolate truffle","Delvin fluff pastry","Flan","Fudge ripple pudding","Icoberry torte","I’danian spice pudding","pack of Jellybeans","Jumja stick","Tamarin frost","Tarvokian pound cake","Thalian chocolate mousse","Uttaberry crepe"];
var EpicureThird = ["Acamarian Brandy","Aldebaran Whiskey","Aldorian ale","Alpha-currant nectar","Altairian Brandy","Alvanian brandy","Andolian brandy","Andorian ale","Arcturian fizz","Bahgol","Balso tonic","Beer","Black hole","Bloodwine","Bolian Tonic Water","Breshtanti ale","Calaman sherry","Cardassian ale","Chateau Cleon","Chateau Coeur","Chateau Lafite Rothschild","Chateau Picard","Chech’tluth","Chiraltan tea","Citrus blend","Coco-no-no","coffee","cognac","Deka tea","Denevian mead","Dom Perignon","Dresci","Earl Grey Tea...hot","Ennanian ale","Experimental juice","Falah Nectar","Fanalian toddy","Ferengi starduster","Ferengi wine","Fountain sweet","Gamzian wine","Ginger tea","Goliath Gulp","Green drink","Hot chocolate","Jestral tea","Jumja tea","Kanar","Kandora champagne","Karin juice","Kenomay tea","Landras blend","Langour","Lapsang suchong tea","Lemon tea","Maraltian Seev-ale","Mareuvian tea","Martini","milk","Millipede juice","Mint tea","Modela apertiff","Mullibok’s wine","orange Juice","Papalla juice","Paris Delight","Pejuta","Poteen","Prometheus nectar","Prosecco","Prune juice","Pyrellian ginger tea","Raktajino","Red Torian","Red leaf tea","Rekarri Starburst","Rokassa juice","Roman ale","Roman beverage","Root beer","Rye and ginger","Samarian Sunset","Sapphire Wine","Saurian Brandy","Scotch","Snail juice","Spinach juice with pear","Spring wine","Stardrifter","Steamed milk with ginger","Synthehol","Takana root tea","Takarian mead","Tanya","Tarkalean tea","Tarran juice","tea","Tellurian synthase","Toffa ale","Traggle nectar","Trixian bubble juice","Tulaberry wine","Tzartak aperitif","Vulcan port","Vulcan spice tea","Wine","Yridian Brandy","Andorran Grand Premier","Andorran tea","Black tea","Champagne","Lemonade","O’mat Gri T’M pffiots","Skagaran Whiskey","Vess Creme Soda", "Voo-Sinteel","Yalasat wine","Zariphean blend tea"];
function Epicure()
{
  var writeY = EpicureFirst[Math.floor(Math.random()*EpicureFirst.length)];
  var writeZ = EpicureSecond[Math.floor(Math.random()*EpicureSecond.length)];
  var writeAA = EpicureThird[Math.floor(Math.random()*EpicureThird.length)];
document.getElementById("MainViewer").innerHTML=writeY+", a "+writeZ+" with a "+writeAA;
}


//ENGINEERING
var EngineeringFirst = ["Adapt protocol in the","Assign","Attach","Check","Check","Combine","Compare relative fields inside the","Connect","Contain","Convert","Create","Direct","Dislodge","Disparate","Force","Increase","Initiate","Interconnect","Intersect","Interpret magnetic scan of","Isolate","Maintain","Make extensive modifications to the", "Manipulate","Measure the angular difference in the","Monitor audio transmission of","Monitor","Move","Organize","Physically manipulate","Reconstruct","Redefine","Regulate","Remove","Remove","Reorientate","Scan","Separate","Solve","Subjugate", "Supply","Target","Transmit","Uncompress","Unfreeze"];
var EngineeringSecond = ["Boridium Power Converter","DNA Sequencer","Diboridium Core","Differential Magnetometer","Directional Sonic Generator","Dyno-scanner","D’Arsay Transformation Program","EJ7 Interlock","Epi-Capacitor","Field Control Unit","Forced Plasma Beam","Heisenberg Compensators","Maco Scanner","Optical Data Network","Optical Transducer","Padd","Particle Fountain","Ablative Armor","Access Terminal","Access Tunnel","Adaptive Interface Link","Altonian Brain Teaser","Antigrav","Antilepton Interface","Antimatter Injectors","Anyon Emitter","Aphasia Device","Aqueduct Systems","Argin","Arva Nodes","Atavachron","Atmosphere Conditioning Pumps","Autosequencers","Avidyne Engines","Axionic Chip","Baffle Plate","Bearing","Beta 5 Computer","Bio-Neural Gel Packs","Bio-Reactor","Biochips","Broad-Spectrum Warp Field","Bussard Collectors","Carbon Reaction Chamber","Central Control Complex","Coil Scanner","Colling Unit","Containment Field","Data Modules","Electroplasma System Taps","Electroplasma System","Emergency Hand Actuator","Emulator Module","Encephalographic Polygraph Scan","Energy Containment Cell","Energy Distribution Net","Energy Transfer Device","Flight Recorder","Fusion Overburn","Grappler","Gravitational Unit","Gravitic Sensor Net","Graviton Field Generator","Graviton Field","Graviton Inverted Circuit","Graviton","Holodeck Imaging Processor","Hologram Generator","Iconic Display Console","Imaging Scanner","Impulse Sustainer","Inertial Dampers","Interface Probe","Interlink Sequencer","Intermix Formula","Interphase Generator","Interphasic Compensator","Intersat Code","Inverter","Ion Propulsion","Isolinear Co-Processor","Isolinear Optical Chip","Isolinear Rods","Isolinear Tag Drones","Jefferies Tube","Laser-Induced Fusion","Linear Memory Crystal","Lithium Crystal","Lower Pylon","Magnaspanner","Magnetospheric Energy Taps","Main Particle Impeller","Master Systems Display","Matter Stream","Matter-Antimatter Integrator","Matter/Antimatter Reaction Chamber","Microscopic Generator","Mid-Range Phase Adjuster","Mnemonic Memore Circuit","Mobie Emitter","Molecular Phase Inverter","Mooring Clamps","Multiphase Tractor Beam","Mutual Induction Field","Neutrino Field","Nucleonic Beam","Nullifier Core","Pattern Buffer","Pattern Enhancer","Phase Buffer","Phase Calibrator","Phase Coil Resonator","Phase Conditioners","Phase Decomiler","Phase Device","Phase Discriminator","Phase Transition Coils","Phase Variance","Phase-Conjugate Graviton Emitter","Pheromonic Sensor","Phoretic Analyzer","Plasma Grid","Plasma Infuser","Plasma Injector","Progressive Encryption Lock","Proximity Detector","Quantum Phase Inhibitor","Refridgeration Unit","Resonators","Root Command Structure","Security Sensor","Ship Recognition Protocols","Spatial Orientation Systems","Statis Field","Submicron Matrix Transfer","Subsonic Transmitter","Subspace Field Inverter","Synaptic Induction","Teraphasic Coils","Thalmerite Device","Tricyclic Plasma Drive","Warp Drive","Warp Field Coils"];
var EngineeringThird = ["and begin modification","and contain anti-matter fuel","and isolate", "and check cohesiveness", "and combine direct inert interface", "to target object", "and screen fields", "and compare with the sustained chamber reacion", "to follow the directed energy particles","and increase subspace amplifier gain", "divert plasma chain ions through the power transfer conduits", "and perform diagostic check", "and begin evacuation procedures", "and compute boolean isometrics", "and then ask Data", "and test hypothesis on the holodeck", "interference","mechanism","protocols","and follow with a Level 2 scan", "that shield the energy forcefield", "with a hardware control interface","with the quantum resonance oscillator"];
function Engineering()
{
  var writeBB = EngineeringFirst[Math.floor(Math.random()*EngineeringFirst.length)];
  var writeCC = EngineeringSecond[Math.floor(Math.random()*EngineeringSecond.length)];
  var writeDD = EngineeringThird[Math.floor(Math.random()*EngineeringThird.length)];
document.getElementById("MainViewer").innerHTML=writeBB+" "+writeCC+" "+writeDD;
}


//PRIME DIRECTIVE
function Prime()
{
document.getElementById("MainViewer").innerHTML="As the right of each sentient species to live in accordance with its normal cultural evolution is considered sacred, no Star Fleet personnel may interfere with the healthy development of alien life and culture. Such interference includes the introduction of superior knowledge, strength, or technology to a world whose society is incapable of handling such advantages wisely. Star Fleet personnel may not violate this Prime Directive, even to save their lives and/or their ship unless they are acting to right an earlier violation or an accidental contamination of said culture. This directive takes precedence over any and all other considerations, and carries with it the highest moral obligation.";
}

//ROLLDICE
function RollDice() {    
  var NumDice = document.getElementById('NumDice').value;
    
  var NumSides = document.getElementById('NumSides').value;
    
  var results = "";
  
  for (var i = 0; i < NumDice - 1; i++) {
    results += (Math.floor(Math.random() * NumSides + 1) + " ").toString() + ", ";
  } 
  results += (Math.floor(Math.random() * NumSides + 1) + " ").toString();
  
  document.getElementById("MainViewer").innerHTML = results;
}
//   Creator of Blatherskite = eldercode.net