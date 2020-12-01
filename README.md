# TP4
Created with CodeSandbox

## 1) Décrire le rôle de chaque fonction (une phrase par fonction).
La fonction validateEmail() permet de vérifier qu’une adresse mail a bien été entrée, en vérifiant l’utilisation d’un @ et de caractères avant et après ce @ et si ces conditions ne sont pas vérifiées, elle renvoie une phrase indiquant qu’il faut remplir d’une adresse mail.

La fonction validateName() permet de vérifier qu’un nom à bien été entrée et si cette condition n’est pas vérifiée, elle renvoie une phrase indiquant qu’il faut remplir d’un nom. 

La fonction NameField() permet d'appeler la fonction validateName et d’afficher en fonction du résultat le message indiquant qu’il faut remplir le nom. 

La fonction EmailField() permet la même chose mais pour l’email, dans les deux cas, le message se réinitialise à chaque entrée. 

La fonction Inscription() permet d’initialiser une constante qui vérifie à la fois qu’un nom à été rentrée et qu’un email a été rentré, cela permettra de rendre le bouton submit cliquable.

La fonction submit() permet de dire que l’on a bien cliqué sur le bouton submit, elle est utilisée lorsque l’on clique sur ce bouton.

## 2) Quelles sont les states et les props mis en jeu ? Indiquez leur valeur par défaut.
Les states et les props mis en jeu sont les suivantes :

State : isSubmit, setSubmit Valeur par défaut : false.

State : name, setName Valeur par défaut : chaîne de caractères vide

State : email, setEmail Valeur par défaut : chaîne de caractères vide

Les props : name et email, setMail, value, type, onChange, isValid

## 3) Que contient la variable event dans onChange={(event) => setName(event.target.value)}? 
L’attribut onChange nous permet d’écouter le changement de valeur d’une entrée. La variable event dans onChange={ (event) } => setName(event.target.value) } permet de garder une trace des valeurs des champs de saisie actuels et de les afficher sur l’interface utilisateur.

## 4) Pourquoi doit-on encapsuler un espace avec {" "} ?
C’est un souci d’affichage, afin que le message soit moins collée au rectangle dédié à l’input.

## 5) Peut-on transmettre une fonction dans un Props ?
Oui, c’est possible, il y en a par exemple dans le code ligne 37 à 40 : la value, le type, le onChange et le isValid.

## 6) Précisez étape par étape ce que fait React lorsque le champ nom est modifié.
Lorsque l’on tape “Pierre” par exemple, on rentre dans le setName dans le props onChange de la fonction NameField. puis on va dans le return, “Pierre” est affiché. Ensuite la fonction nameField appelle la fonction valideName et comme il n’est pas vide elle retourne undefined donc rien n’est affiché au lieu de “Un nom est obligatoire” si le champ n’avait pas de valeur.

## 7) Expliquez la regex pour valider un email. Vous pouvez la recopier dans regex101.com pour vous aider.
La regex /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/

^ affirme la position au début de la chaine.

a-zA-Z accepte les caractères de a à z en minuscule et majuscule.

0-9 accepte les chiffres de 0 à 9

.!#$%&'*+/=?^_`{|}~- accepte un seul caractère de cette liste

quantifie un nombre illimité de fois les caractère précédent

@ doit correspondre à ce caractère littéralement.

backslash. correspond au caractère point, l’antislash permet d’échapper afin qu’il soit bien considéré comme un caractère.

$ affirme la position à la fin de la chaine.

## 8) Un composant a été designé avec styled-components. En s'aidant de la documentation de cette librairie, expliquez en quoi consiste ce design.
Le styled components va créer un composant React pour chaque style, qu’on va lui attacher. On utilisera ensuite ces composants pour chaque partie de notre code qu’on va vouloir styliser, en affectant chaque partie à un composant.
