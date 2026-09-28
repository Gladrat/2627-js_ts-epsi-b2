```shell
npm create vite@latest australis-ui -- --template vanilla-ts

# CTRL + C

cd australis-ui

code .

npm run dev
```

```ascii
0. Environnement (vite/ts)
1. JS/TS et les contrats
2. Tableaux
3. Modélisation TypeScript
4. Navigateur et DOM
5. Formulaires et états
6. Etats dérivés (filtres) et organisation du rendu
7. Asynchronisme, promise et fetch
```

```ascii
src/
├── main.ts
├── data/
├── models/
│   ├── course.ts
│   └── student.ts
├── ui/
│   ├── courses.ts
│   └── students.ts
└── state.ts
```