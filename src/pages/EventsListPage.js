/**
 * @module EventsPage
 */
import Page from "./Page.js";

/**
 * @class AllEventsPage
 * Vue des événements
 */
export default class EventsListPage extends Page {
  constructor(pageData = null) {
    super(pageData);
  }

  get title() {
    let result = "Agendax";
    return result;
  }

  get body() {
    let result = `<div class="container mt-5">
		<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
			Ajout
		  </button>
		  
		  <!-- Modal -->
		  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered" role="document">
			  <div class="modal-content">
				<div class="modal-header">
				  <h5 class="modal-title" id="exampleModalLongTitle">Ajout evenement</h5>
				  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				  </button>
				</div>
				<div class="modal-body">
					<form>
						<div class="form-group">
						  <label for="exampleInputEmail1">Titre</label>
						  <input type="text" class="form-control" id="titre" placeholder="Entrer le titre">
						</div>
						<div class="form-group">
						  <label for="DateDebut">Date debut</label>
						  <input type="datetime-local" class="form-control" id="dateDebut" >
						</div>
						<div class="form-group">
							<label for="dateFin">Date Fin</label>
							<input type="datetime-local" class="form-control" id="dateFin" >
						</div>
						<div>
							<label for="categorie">Categorie</label>
							<select class="form-control" id="categorie_ajout">
							</select>
						</div>
						<button id="addEvent" class="btn btn-primary">Submit</button>
					  </form>
				</div>
			  </div>
			</div>
		  </div>

		  <!-- Modal modify -->
		  <div class="modal fade" id="modifyModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered" role="document">
			  <div class="modal-content">
				<div class="modal-header">
				  <h5 class="modal-title" id="exampleModalLongTitle">Modifier evenement</h5>
				  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				  </button>
				</div>
				<div class="modal-body">
					<form>
						<div class="form-group">
						  <label for="">Titre</label>
						  <input type="text" class="form-control" id="titreModify" placeholder="Entrer le titre">
						</div>
						<div class="form-group">
						  <label for="DateDebut">Date debut</label>
						  <input type="datetime-local" class="form-control" id="dateDebutModify">
						</div>
						<div class="form-group">
							<label for="dateFin">Date Fin</label>
							<input type="datetime-local" class="form-control" id="dateFinModify">
						</div>
						<div>
							<label for="categorieModify">Categorie</label>
							<select class="form-control" id="categorieModify">
							</select>
						</div>
						<button id="modifyEvent" class="btn btn-primary">Modifier</button>
						<button id="deleteEvent" class="btn btn-primary">DELETE</button>
					  </form>
				</div>
			  </div>
			</div>
		  </div>

		  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modifyCategory">
			Settings
		  </button>

		  <!-- Modal Category -->
		  <div class="modal fade" id="modifyCategory" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered" role="document">
			  <div class="modal-content">
				<div class="modal-header">
				  <h5 class="modal-title" id="exampleModalLongTitle">Setting</h5>
				  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				  </button>
				</div>
				<div class="modal-body">
					<form>
					<label>Affichage du calendrier</label>
					<select
					id="selectCalend"
					class="custom-select custom-select-lg mb-3"
				  >
					<option value="Mois">Mois</option>
					<option value="Semaine">Semaine</option>
				  </select>
				  <label>Affichage des dates</label>
					<select
					id="selectFormatDate"
					class="custom-select custom-select-lg mb-3"
				  >
					<option selected value="Numerique">Numerique</option>
					<option value="Lettre">Lettre</option>
				  </select>
						<div class="form-group" id="listeCategorie">
						<div>
							
						</div>
						<label for="categorieDefault">Veuillez choisir la categorie par defaut</label>
						<select class="form-control" id="categorieDefault">
							</select>
						</div>
						<button id="categoryDef" class="btn btn-primary">Modifier</button>
					  </form>
				</div>
			  </div>
			</div>
		  </div>

	  <div class="container mt-5">
	  <div class="card" id="card">
		<h3 class="card-header" id="monthAndYear"></h3>
		<table class="table table-bordered table-responsive-lg" id="calendar">
		  <thead>
			<tr>
			  <th>Sun</th>
			  <th>Mon</th>
			  <th>Tue</th>
			  <th>Wed</th>
			  <th>Thu</th>
			  <th>Fri</th>
			  <th>Sat</th>
			</tr>
		  </thead>
  
		  <tbody id="calendar-body"></tbody>
		</table>
  
		<div class="form-inline">
		  <button
			class="btn btn-outline-primary col-md-6"
			id="previous"
		  >
			Previous Month
		  </button>
  
		  <button
			class="btn btn-outline-primary col-md-6"
			id="next"
		  >
			Next Month
		  </button>
		  <button
			class="btn btn-outline-primary col-md-6"
			id="previousWeek"
		  >
			Previous Week
		  </button>
		  <button
			class="btn btn-outline-primary col-md-6"
			id="nextWeek"
		  >
			Next Week
		  </button>
		</div>
		<br />
	  </div>
	</div>`;
    return result;
  }

  get eventData() {
    return JSON.stringify(this.data.events);
  }

  get script() {
    let donnee = this.eventData;

    let result = `
		import App from "/src/App.js";
		"use strict";

		//Permet d'initialiser nos varaibles
		let today = new Date();
		let currentMonth = today.getMonth();
		let currentYear = today.getFullYear();
		let compteur = 1;		
		let monthAndYear = document.getElementById("monthAndYear");
		let months = [
		  "Jan",
		  "Feb",
		  "Mar",
		  "Apr",
		  "May",
		  "Jun",
		  "Jul",
		  "Aug",
		  "Sep",
		  "Oct",
		  "Nov",
		  "Dec",
		];
		let categories = [] ;
		

		


		//Stock les donnees de la DB
		let donnee  = ${donnee}
		let storageLocal = localStorage.getItem("categorie");
		if (storageLocal !== null && storageLocal !== "") {
			try {
				let obj = JSON.parse(storageLocal);
				$("#categorie_ajout").val(obj.default);
				showCalendar(currentMonth, currentYear, obj.affichage);
			}
					
			catch (e) {
				console.error(e);
			}
		}else{
			showCalendar(currentMonth, currentYear, "Mois");
		}

		

		/*
		Fonction permetant de creer des couleurs aelatoires
		@Retourne un array
		*/
		function couleurAleatoire(nb){
			let array = [];
			for(let i = 0; i<=nb; i++ ){
				let couleurRand = "#"+((1<<24)*Math.random()|0).toString(16);
				array.push(couleurRand);
			}
			return array;
		}

		/*
		*Fonction qui permet d'ajouter des tooltips contenant des info
		*/
		function addToolTip(cell, donnee){
			//Permet de mettre des attributs au cell BOOTSTRAP
			cell.setAttribute("data-toggle", "tooltip");
			cell.setAttribute("data-html", "true");
			cell.setAttribute("data-title", donnee[event].name);
			cell.setAttribute("title", "<h5>" +  donnee[event].name + "<br>Debut:<br> "+ donnee[event].startdt.substr(0, 10) +"<br>Fin:<br> " + donnee[event].enddt.substr(0, 10)+"</h5>");	

			//Verifie si localStorage est vide
			let storageLocal = localStorage.getItem("categorie");
			if (storageLocal !== null && storageLocal !== "") {
				try {
					let obj = JSON.parse(storageLocal);
					console.log(obj);

					document.getElementById("categorieDefault").value = obj.default
					document.getElementById("selectFormatDate").value = obj.formatDate
					
					
					if(obj.formatDate == "Lettre"){
						//Permet de creer la chaine de car pour afficher les donnnees
						let moisFormatDebut = parseInt(donnee[event].startdt.substr(8, 2))+ " " + months[parseInt(donnee[event].startdt.substr(5, 2) - 1)] + " " + donnee[event].startdt.substr(0, 4)+" à "+  donnee[event].startdt.substr(10, 6);
						let moisFormatFin = parseInt(donnee[event].enddt.substr(8, 2))+ " " + months[parseInt(donnee[event].enddt.substr(5, 2) - 1)] + " " + donnee[event].enddt.substr(0, 4) +" à "+  donnee[event].enddt.substr(10, 6);	
						cell.setAttribute("title", "<h5>" +  donnee[event].name + "<br>Debut:<br> "+moisFormatDebut +"<br>Fin:<br> " + moisFormatFin+"</h5>");
					}
				}
						
				catch (e) {
					console.error(e);
				}
			}
			//Bootstrap...
			$(document).ready(function(){
				$('[data-toggle="tooltip"]').tooltip();   
			  });
		}

		//Creer un array de couleur aleatoire
		let couleurAle= couleurAleatoire(9);

		//Permet de creer les 10 categories dans un array
		for(let i = 0; i<=9; i++ ){

			//Genere une couleur aleatoire par defaut
			let couleurRand = couleurAle[i];

			//Permet de generer couleur aleatoirement et verifie que notre localStorage n'est pas vide
			let itemsStr = localStorage.getItem("categorie");
			if (itemsStr !== null || itemsStr === "") {
				try{
					//Permet d'associer la couleur associe a la categorie
					let obj = JSON.parse(localStorage.getItem("categorie"))
					
					let objCouleur = obj.couleur;
					couleurRand = objCouleur[donnee[i].category];
				}
				catch(e){
					console.error(e);
				}
			}
			
			//Permet de generer les options des settings
			$('#listeCategorie').append('<div class="list-group" >'+ donnee[i].category+ ' <input type="color" value="'+couleurRand+'"  name="'+ donnee[i].category +'" id="favcolor'+ i +'"></div class="container" ><br>')
			$('#categorieModify').append(new Option(donnee[i].category, donnee[i].category))
			$('#categorieDefault').append(new Option(donnee[i].category, donnee[i].category))
			$('#categorie_ajout').append(new Option(donnee[i].category, donnee[i].category))
			$('#categorie_ajout').val(donnee[i].category);
		}

		//Permet de stocker les info des settings dans le local storage
		document.getElementById("categoryDef").addEventListener("click", (evt)=>{
		
			//Code Pour ajouter dans le localStorage
			localStorage.setItem(
				"categorie",
				JSON.stringify({
				  default: $("#categorieDefault").val(),
				  couleur: {
					[$("#favcolor0").attr('name')]: $("#favcolor0").val(),
					[$("#favcolor1").attr('name')]: $("#favcolor1").val(),
					[$("#favcolor2").attr('name')]: $("#favcolor2").val(),
					[$("#favcolor3").attr('name')]: $("#favcolor3").val(),
					[$("#favcolor4").attr('name')]: $("#favcolor4").val(),
					[$("#favcolor5").attr('name')]: $("#favcolor5").val(),
					[$("#favcolor6").attr('name')]: $("#favcolor6").val(),
					[$("#favcolor7").attr('name')]: $("#favcolor7").val(),
					[$("#favcolor8").attr('name')]: $("#favcolor8").val(),
					[$("#favcolor9").attr('name')]: $("#favcolor9").val(),
				  },
				  affichage: $("#selectCalend").val(),
				  formatDate: $("#selectFormatDate").val(),
			

				})
			  );

			});


			/*
			*Fonction qui permet d'ajouter tous les dates dans le calendrier
			*/
			function calendarDate(donnee, cell) {
				for (event in donnee) {

				  //Verifie que la date de l'evenement est associe a la bonne cell	
				  let startTime = donnee[event].startdt.substr(0, 10);
				  if (startTime == cell.getAttribute("data-date")) {
					
					addToolTip(cell, donnee)
					//Permet de mettre des attributs contenants les infos de l'event
					cell.setAttribute("data-event-id", donnee[event].id)
					cell.setAttribute(
					  "data-startdt",
					  donnee[event].startdt.substr(0, 10) +
						"T" +
						donnee[event].startdt.substr(11, 5)
					);
					cell.setAttribute(
					  "data-enddt",
					  donnee[event].enddt.substr(0, 10) +
						"T" +
						donnee[event].enddt.substr(11, 5)
					);
					cell.setAttribute("data-categorie", donnee[event].category);
			  
					//Permet d'ajouter le texte dans les cell
					cell.innerHTML +=
						"<br>" +
					  donnee[event].name+
					
			  
					//Ajoute le eventListener pour activer le modal
					cell.addEventListener("click", function (evt) {
					  //Appelle le bootstrap
					  cell.setAttribute("data-target", "#modifyModalCenter");
					  cell.setAttribute("data-toggle", "modal");

					  //Permet d'aller chercher les infos de l'event pour pre remplir le forms
					  document.getElementById("titreModify").value = evt.target.getAttribute(
						"data-title"
					  );
					  document.getElementById(
						"dateDebutModify"
					  ).value = evt.target.getAttribute("data-startdt");
					  document.getElementById(
						"dateFinModify"
					  ).value = evt.target.getAttribute("data-enddt");
					  document.getElementById(
						"categorieModify"
					  ).value = evt.target.getAttribute("data-categorie");
			  
					  let id = evt.target.getAttribute("data-event-id");

					  //Permet de modifier l'event
					  document
						.getElementById("modifyEvent")
						.addEventListener("click", (evt) => {
						  evt.preventDefault();
						  App.controller.editEvent(id, {
							name: document.getElementById("titreModify").value,
							startdt: document.getElementById("dateDebutModify").value,
							enddt: document.getElementById("dateFinModify").value,
							category: document.getElementById("categorieModify").value,
						  });
						});

				      //Permet de supprimer l'event	
					  document
						.getElementById("deleteEvent")
						.addEventListener("click", (evt) => {
						  evt.preventDefault();
						  App.controller.deleteEvent(id);
						  cell.classList.remove("event");
						});
					});
			  
					//Verifie si localStorage n"est pas null
					let itemsStr = localStorage.getItem("categorie");

					//Permet d'ajouter la couleur de la categorie de l'event
					if (itemsStr !== null && itemsStr !== "") {
						
							let obj = JSON.parse(localStorage.getItem("categorie"));
							let objCouleur = obj.couleur;
							for (const property in objCouleur) {
								
								if (property === cell.getAttribute("data-categorie")) {
								cell.style.backgroundColor = objCouleur[property];
							}
								
					  }
					}else{
						let element = document.getElementsByName(cell.getAttribute("data-categorie"));
					
						//cell.style.backgroundColor =element[0].value;
					}

				  }
				}
			  }





		//Permet de mettre les dates sous un bon format
        function moisJour(mois, jour){
            if(jour<10){
                jour='0'+jour
            } 
            if(mois<10){
                mois='0'+mois
            } 
            return mois +'-'+ jour
        }
		
		//Permet de passer au mois suivant
		document.getElementById("next").addEventListener("click", () => {
		  currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
		  currentMonth = (currentMonth + 1) % 12;
		  showCalendar(currentMonth, currentYear, "Mois");
		});
		
		//Permet de passer au mois precedent
		document.getElementById("previous").addEventListener("click", () => {
		  currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
		  currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
		  showCalendar(currentMonth, currentYear, "Mois");
		});
		
		//Permet de passer semaine suivant
		document.getElementById("nextWeek").addEventListener("click", () => {
		  compteur++;
		  if (compteur > 5) {
			compteur = 1;
			currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
			currentMonth = (currentMonth + 1) % 12;
			showCalendar(currentMonth, currentYear);
		  }
		  showCalendar(currentMonth, currentYear, "Semaine");
		});
		
		//Permet de passer semaine suivant
		document.getElementById("previousWeek").addEventListener("click", () => {
		  compteur--;
		  if (compteur <= 0) {
			compteur = 5;
			currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
			currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
			showCalendar(currentMonth, currentYear);
		  }
		  showCalendar(currentMonth, currentYear, "Semaine");
		});
		
		//Permet de choisir vue entre mois et semaine
		document.getElementById("selectCalend").addEventListener("change", () => {
		  let choix = document.getElementById("selectCalend").value;
		  document.getElementById("selectCalend").value = choix
		  showCalendar(currentMonth, currentYear, choix);
		});


		

		/*
		*Fonction qui permet de generer l'affichage du calendrier par mois ou semaine
		*/
		function showCalendar(month, year, choix) {
	

		let cell = document.createElement("td");
		  let firstDay = new Date(year, month).getDay();
		  let daysInMonth = 32 - new Date(year, month, 32).getDate();
		
		  let tbl = document.getElementById("calendar-body"); // body du calendrier
		
		  // Nettoie le result des anciennes cell
		  tbl.innerHTML = "";
		
		  // Ajoute les infos de la date
		  monthAndYear.innerHTML = months[month] + " " + year;
		 
		  
		  // Creer les cells
		  let date = 1;
		   if(month<10){
			   month='0'+(month+1)
		   } 
		  if (choix == "Mois") {

			//Permet de changer l'affiache des boutons en bas de page
			document.getElementById("previousWeek").classList.add("hidden");
			document.getElementById("nextWeek").classList.add("hidden");
			document.getElementById("previous").classList.remove("hidden");
			document.getElementById("next").classList.remove("hidden");
			
			for (let i = 0; i < 6; i++) {
				
			  // Permet de faire les tr
			  let row = document.createElement("tr");
		
			  //Permet d'afficher les 7 jours
			  for (let j = 0; j < 7; j++) {
				
				if (i === 0 && j < firstDay) {
				  let cell = document.createElement("td");
				  let cellText = document.createTextNode("");
				  cell.appendChild(cellText);
				  row.appendChild(cell);
				} else if (date > daysInMonth) {
				  break;
				} else {
				  let cell = document.createElement("td");
				  let cellText = document.createTextNode(date);
				  if (
					date === today.getDate() &&
					year === today.getFullYear() &&
					month === today.getMonth()
				  ) {
					cell.classList.add("bg-info");
				  } // color today's date
				   cell.appendChild(cellText);

				   if(date<10){
					date='0'+date
				   } 
				   
				
				  //Permet de placer sur le bon format
				  cell.setAttribute("data-date", year + "-" + month  + "-" + date);
				  
				  //Permet placer les events dans le calendrier
				  calendarDate(donnee, cell)

				  row.appendChild(cell);
				  date++;
				  
				}
			  }
		
			  

			  tbl.appendChild(row); //Append chaque row au calendrier
			}
		  } else {
			document.getElementById("previous").classList.add("hidden");
			document.getElementById("next").classList.add("hidden");
			document.getElementById("previousWeek").classList.remove("hidden");
			document.getElementById("nextWeek").classList.remove("hidden");
		
			var curr = new Date(); // Permet d'aller chercher la date d'aujourdhui
			var first = curr.getDate() - curr.getDay(); //Permet de mettre le premier jour Lundi et non Dimanche :
		
			//Permet d'aller le premier jour de la semaine
			var firstday = new Date(curr.setDate(first)).toString();
		
			//Permet d'afficher une seule semaine
			for (let i = 0; i < 6; i++) {
			  // creates a table row
			  let row = document.createElement("tr");
			  //rend tout les tr hidden pour ensuite afficher une seul semaine à la fois
			  row.classList.add("hidden");
			  //Permet d'afficher les 7 jours
			  for (let j = 0; j < 7; j++) {
				if (i === 0 && j < firstDay) {
				  let cell = document.createElement("td");
				  let cellText = document.createTextNode("");
				  cell.appendChild(cellText);
				  row.appendChild(cell);
				} else if (date > daysInMonth) {
				  break;
				} else {
				  let cell = document.createElement("td");
				  let cellText = document.createTextNode(date);
				  if (
					date === today.getDate() &&
					year === today.getFullYear() &&
					month === today.getMonth()
				  ) {
					cell.classList.add("bg-info");
				  } // color today's date
				  cell.appendChild(cellText);
				  cell.dataset.date = year + "-" + month + "-" + date;
				  row.appendChild(cell);
				  //Permet placer les events dans le calendrier
				  calendarDate(donnee, cell)
				  date++;
				}
			  }
			  tbl.appendChild(row); //Append chaque row au calendrier
			  //tr[1].style.backgroundColor = "red";
			}
		
			document
			  .querySelector('tbody tr:nth-of-type('+ compteur +')')
			  .classList.remove("hidden");
		  }
		  calendarDate(donnee, cell)
		}


		//Permet d'ajouter une date min
		let dd = today.getDate();
		let mm = today.getMonth()+1; //Janvier est 0!
		let yyyy = today.getFullYear();
		let hh = today.getHours()
		let min = today.getMinutes();

		if(min<10){
			min='0'+min
		} 
		
		let todayMin = yyyy+'-'+moisJour(mm, dd)+"T"+hh+":"+min;
		let todayMax = yyyy+'-'+moisJour(mm, dd)+"T"+hh+":"+(min+1);

		//Ajouter une date minimum
		$('#dateDebut').attr('min',todayMin)
		
		$('#dateFin').attr('min',todayMax)

		$('#dateDebutModify').attr('min',todayMin)
		
		$('#dateFinModify').attr('min',todayMax)

		//Permet d'ajouter un eevent
		document.getElementById("addEvent").addEventListener("click", (evt)=>{
				evt.preventDefault();
				console.log("click pour ajout événement");
				App.controller.addEvent({
					name:document.getElementById('titre').value,
					startdt:document.getElementById('dateDebut').value,
					enddt:document.getElementById('dateFin').value,
					category:document.getElementById('categorie_ajout').value,
				});
			});

			
		`;
    return result;
  }
}
