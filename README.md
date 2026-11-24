# CoordoEPS (v1.1.0)
Application du **coordonnateur EPS**, intégrée à Mes Apps EPS (identifiant d'application : `coordoeps`).
Elle organise l'année de toute l'équipe, puis la transmet à chaque enseignant, qui l'importe dans **SuiviProf EPS**.

**Sans élèves** : la programmation se prépare en fin d'année, avant les listes Pronote. Elle repose uniquement sur les noms de classes et de groupes prévus, les périodes, les cycles, les dates d'évaluation (fin de période, fin de cycle, CCF), les APSA et la répartition des installations. La liste Pronote du portail n'est jamais mélangée aux classes de la programmation (reprise facultative des noms seulement). À la rentrée, SuiviProf EPS fait correspondre chaque nom prévu avec la classe Pronote réelle.

- **📅 Année** : « Préparer l'année suivante » (décale périodes, cycles et évaluations d'un nombre entier de semaines, efface interruptions et bascules A/B, recharge les vacances officielles, option : retirer les enseignants des classes).
   établissement, coordonnateur, rentrée et fin des cours, zone et vacances (calendrier officiel 2026-2027 intégré, mise à jour depuis data.education.gouv.fr), fériés (option Alsace-Moselle, Pentecôte), périodes interruptives par classe, trimestres/semestres, semaines A/B avec bascules. Mêmes règles que SuiviProf EPS.
- **👥 Équipe et installations** : enseignants (couleur, statut, ORS, forfait AS), installations (type, nombre de classes accueillies en même temps). Tableau des services : heures d'EPS par semaine (A/B comptés pour moitié), AS, total, écart à l'ORS (HSA ou heures à attribuer).
- **🗓️ Emplois du temps** : classes et groupes saisis en bloc ou générés (« 2NDE 1, 2NDE 2… »), niveau deviné et modifiable, enseignant, créneaux (jour, horaires, A/B, installation, enseignant différent si besoin), évaluation T/S. Grille hebdomadaire filtrable (équipe, enseignant, installation, classe ; semaine A/B), imprimable. Conflits : enseignant sur deux créneaux, installation au-delà de sa capacité.
- **📚 Programmation** : cycles par classe (APSA et CA proposés, dates, créneaux, installation propre au cycle), nombre de séances et d'heures calculé, répartition de l'année en N cycles, copie d'une programmation vers les classes du même niveau. Planning annuel de l'équipe (classes × année, couleurs par CA, installation ou enseignant, vacances, aujourd'hui), imprimable. Évaluations par cycle (fin de cycle, CCF, CCF rattrapage, diagnostique, intermédiaire, épreuve ponctuelle) : losanges sur le planning, fins de période en pointillés, calendrier des évaluations imprimable. Contrôles : heures par CA, cycles sans évaluation, évaluation un jour sans séance, cycles sans dates/CA, séances hors cycle, séances partagées par deux cycles, installations en surnombre date par date.
- **📤 Partage** : fichier `.json` (format `CoordoEPS`) pour toute l'équipe ou par enseignant ; tableau de synthèse `.xlsx` (Programmation, Évaluations, Emplois du temps, Équipe et services, Installations, Heures par CA, Calendrier) ; enregistrement dans Mes Apps EPS en mode « lignes » (une ligne par cycle pour chaque élève : Date, Fin, Cycle, CA, Enseignant, Installation, Créneaux, Séances) ; sauvegarde/restauration.

## Format du fichier de partage
```json
{"format":"CoordoEPS","v":1,"etab":"…","auteur":"…","annee":"2026-2027","pour":"(id enseignant, si fichier individuel)",
 "org":{ calendrier identique à SuiviProf EPS : zone, debut, fin, vac, als, pent, ab, flip, inter, per },
 "profs":[{"id","nom","prenom","statut","ors","as","couleur"}],
 "inst":[{"id","nom","type","cap","rem"}],
 "classes":{"2NDE 1":{"niveau","prof","eval":"T|S","effectif",
   "cren":[{"id","jour":1-6,"hd":"08:00","hf":"10:00","sem":"AB|A|B","inst","prof"}],
   "cycles":[{"id","nom","ca","du","au","cren":[ids],"inst","evals":[{"type","date"}]}]}}}
```
Les identifiants des créneaux et des cycles sont stables : un nouvel import dans SuiviProf EPS met à jour les cycles déjà importés au lieu de les dupliquer.

Dépôt : `VinzToc/CoordoEPS`, publié sur https://vinztoc.github.io/CoordoEPS/ (GitHub Pages).
Ajouter la ligne de `apps.json-ligne.txt` dans `apps.json` du portail et `icons/icon-192-CoordoEPS.png` dans `icons/` du portail.
