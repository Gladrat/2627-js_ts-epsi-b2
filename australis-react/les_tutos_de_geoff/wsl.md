# WSL en 2026 — tuto « pour moldu » 🧙‍♂️

En 2026, Microsoft a énormément simplifié WSL. Sur **Windows 11**, l'installation normale tient pratiquement en **une seule commande**. `wsl --install` active WSL, installe le nécessaire pour WSL 2 et installe **Ubuntu par défaut**. [Microsoft Learn](https://learn.microsoft.com/fr-fr/windows/wsl/install?utm_source=chatgpt.com)

1. **Ouvre PowerShell en administrateur.** Clique sur Démarrer, tape `PowerShell`, puis clic droit → **Exécuter en tant qu'administrateur**.

2. **Tape exactement ceci :**
   ```powershell
   wsl --install
   ```
   Appuie sur **Entrée** et laisse Windows faire son travail. Pas besoin d'aller cocher manuellement 14 options obscures dans Windows. 😄

3. **Redémarre le PC** lorsque Windows te le demande. Le redémarrage fait partie de l'installation normale. [Microsoft Learn](https://learn.microsoft.com/fr-fr/windows/wsl/install?utm_source=chatgpt.com)

4. Après redémarrage, **Ubuntu** devrait terminer son installation. Il va te demander quelque chose comme :
   ```text
   Enter new UNIX username:
   ```
   Mets simplement un nom, par exemple :
   ```text
   toto
   ```
   Puis choisis un mot de passe. **Quand tu tapes le mot de passe, rien ne s'affiche à l'écran : ni points ni étoiles. C'est normal sous Linux.**

5. Quand tu vois quelque chose ressemblant à :
   ```text
   toto@MON-PC:~$
   ```
   🎉 **C'est terminé. Tu es dans Linux, à l'intérieur de Windows.**

6. Fais immédiatement les mises à jour Ubuntu :
   ```bash
   sudo apt update
   sudo apt upgrade -y
   ```
   Il te demandera éventuellement ton mot de passe Linux.

7. Pour vérifier que tu es bien en **WSL 2**, retourne dans PowerShell et tape :
   ```powershell
   wsl -l -v
   ```
   Tu devrais obtenir quelque chose comme :
   ```text
     NAME      STATE           VERSION
   * Ubuntu    Running         2
   ```
   Les nouvelles installations faites avec `wsl --install` utilisent normalement **WSL 2 par défaut**. [Microsoft Learn](https://learn.microsoft.com/fr-fr/windows/wsl/install?utm_source=chatgpt.com)

### À partir de maintenant

Pour démarrer Linux, tu peux simplement ouvrir **Ubuntu** depuis le menu Démarrer, ou ouvrir Windows Terminal et taper :

```powershell
wsl
```

Pour quitter Linux :

```bash
exit
```

Pour mettre WSL lui-même à jour de temps en temps :

```powershell
wsl --update
```

### Si `wsl --install` fait n'importe quoi

Si la commande affiche seulement l'aide de WSL au lieu d'installer Ubuntu :

```powershell
wsl --list --online
```

puis :

```powershell
wsl --install -d Ubuntu
```

Et si l'installation reste bloquée à **0,0 %**, Microsoft recommande :

```powershell
wsl --install --web-download -d Ubuntu
```

Ces solutions sont celles indiquées actuellement dans la documentation Microsoft. [Microsoft Learn](https://learn.microsoft.com/fr-fr/windows/wsl/install?utm_source=chatgpt.com)

**Prérequis :** ce mode d'installation fonctionne sous **Windows 11** et sous Windows 10 version 2004/build 19041 ou plus récente. [Microsoft Learn](https://learn.microsoft.com/en-us/windows/wsl/install?trk=article-ssr-frontend-pulse_little-text-block\&utm_source=chatgpt.com)

Si ton but derrière WSL est de faire du **dev (VS Code, Git, Python, Node.js, Docker, etc.)**, l'étape suivante importante est de configurer correctement les dossiers et les outils dans WSL — il y a 2-3 pièges classiques à éviter.