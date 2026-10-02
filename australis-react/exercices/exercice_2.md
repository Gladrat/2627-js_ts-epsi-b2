# Exercice 2 — Catalogue réutilisable

Construire :

```
App
└── CourseList
    ├── CourseCard
    ├── CourseCard
    └── CourseCard
```

Contraintes :

- `CourseList` reçoit `courses: Course[]` ;
- `CourseCard` reçoit un `Course` ;
- chaque carte possède une clé stable ;
- un bouton appelle `onSelect(course.id)` ;
- les cours indisponibles sont visuellement signalés ;
- aucun état React pour l'instant.