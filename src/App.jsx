import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL  = "https://udijfrjpvnypzxxurvzo.supabase.co";
const SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkaWpmcmpwdm55cHp4eHVydnpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQwMTcwNjAsImV4cCI6MjA4OTU5MzA2MH0.4fjFL3vQfEOSSInfrRlwJrxR3a4BlivMJzaQV2l-AB0";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);

const ICONS  = ["🔥","💧","📖","🏃","🧘","💪","🥗","😴","✍️","🎯","🎸","🌿"];
const COLORS = ["#FF4D4D","#FF8C42","#FFD166","#06D6A0","#118AB2","#A855F7","#EC4899","#14B8A6","#F59E0B","#6366F1","#10B981","#EF4444"];

const LANGUAGES = [
  {code:"en", label:"English"},
  {code:"es", label:"Espanol"},
  {code:"fr", label:"Francais"},
  {code:"de", label:"Deutsch"},
  {code:"pt", label:"Portugues"},
  {code:"it", label:"Italiano"},
  {code:"ja", label:"Japanese"},
  {code:"zh", label:"Chinese"},
  {code:"ar", label:"Arabic"},
];

const CURRENCIES = [
  {code:"USD", symbol:"$", label:"USD"},
  {code:"GBP", symbol:"£", label:"GBP"},
  {code:"EUR", symbol:"€", label:"EUR"},
  {code:"CAD", symbol:"$", label:"CAD"},
  {code:"AUD", symbol:"$", label:"AUD"},
  {code:"JPY", symbol:"¥", label:"JPY"},
  {code:"INR", symbol:"₹", label:"INR"},
  {code:"BRL", symbol:"R$", label:"BRL"},
];

const PRICES = {
  USD:{monthly:"$4.99",annual:"$29.99"},
  GBP:{monthly:"£3.99",annual:"£23.99"},
  EUR:{monthly:"€4.49",annual:"€26.99"},
  CAD:{monthly:"$6.49",annual:"$38.99"},
  AUD:{monthly:"$7.49",annual:"$44.99"},
  JPY:{monthly:"¥749",annual:"¥4499"},
  INR:{monthly:"₹399",annual:"₹2399"},
  BRL:{monthly:"R$24.99",annual:"R$149.99"},
};

// Full translations
const T = {
  en:{
    appName:"Pulse", perfectDay:"Perfect Day 🏆",
    today:"Today", stats:"Stats", noHabits:"No habits yet",
    noHabitsDesc:"Tap below to start building your best self",
    addHabit:"Add New Habit", done:"done",
    freePlan:"Free Plan", habits:"habits",
    upgradeDesc:"Upgrade for unlimited habits and stats",
    goPro:"Go Pro", signInTitle:"Sign in to save your data",
    signInDesc:"Your habits are only stored locally until you create an account.",
    signUp:"Sign Up", logIn:"Log In", createAccount:"Create Account",
    welcomeBack:"Welcome Back", yourName:"Your name",
    emailAddress:"Email address", password:"Password (min. 6 characters)",
    forgotPassword:"Forgot password?", alreadyHaveAccount:"Already have an account?",
    noAccount:"Do not have an account?", continueBtn:"Continue",
    checkEmail:"Check your email!", emailSent:"Email sent!",
    didntReceive:"Did not receive it?", resendEmail:"Resend verification email",
    goToLogin:"Go to Log In", backToLogin:"Back to Log In",
    backToLoginLink:"Back to login", resetPassword:"Reset Password",
    sendResetLink:"Send Reset Link", enterEmailReset:"Enter your email and we will send you a reset link.",
    account:"Account", notSignedIn:"You are not signed in",
    notSignedInDesc:"Create an account to sync habits and unlock Pro.",
    upgradePro:"Upgrade to Pro", proActive:"Pro active - thank you for supporting Pulse!",
    signOut:"Sign Out", deleteAccount:"Delete account",
    deleteConfirmTitle:"Delete account?",
    deleteConfirmDesc:"This permanently deletes your account, all habits, and streak history. This cannot be undone.",
    cancel:"Cancel", delete:"Delete",
    language:"Language", currency:"Currency",
    appLanguage:"App display language", pricingCurrency:"Pricing display currency",
    upgradeTitle:"Upgrade to Pro", unlockPotential:"Unlock your full potential.",
    unlimitedHabits:"Unlimited habits", noMoreLimits:"No more limits",
    advancedStats:"Advanced stats and heatmaps", statsDesc:"30-day views and completion rates",
    streakEditing:"Streak editing", fixMissedDay:"Fix any missed day",
    reminders:"Reminders", neverBreak:"Never break your chain",
    monthly:"MONTHLY", annual:"ANNUAL", perMonth:"per month", perYear:"per year",
    bestValue:"BEST VALUE", upgradeNow:"Upgrade Now", signUpGoPro:"Sign Up and Go Pro",
    cancelAnytime:"Cancel anytime — no refunds",
    statsTitle:"Your Progress", statsProOnly:"Stats are Pro-only",
    statsProDesc:"Unlock detailed 30-day heatmaps, completion rates, and streak analytics.",
    unlockStats:"Unlock Stats - Go Pro", addHabitsStats:"Add habits to see your stats",
    totalCompletions:"total completions", lastThirtyDays:"Last 30 days",
    dayStreak:"day streak", currentStreak:"Current streak",
    totalDays:"Total days", thirtyDayRate:"30d rate",
    editStreak:"Edit Streak", tapDayToggle:"Tap any day to toggle",
    newHabit:"New Habit", editHabit:"Edit Habit", habitName:"Habit name...",
    icon:"Icon", color:"Color", saveChanges:"Save Changes",
    passwordStrength:"Password strength", weak:"Weak", fair:"Fair", good:"Good", strong:"Strong",
    verified:"Verified", freePlanBadge:"Free Plan",
    incorrectPassword:"Incorrect email or password.",
    accountDeleted:"This account no longer exists.",
    noAccountFound:"No account found with that email.",
    fillAllFields:"Please fill in all fields.",
    enterName:"Please enter your name.",
    validEmail:"Enter a valid email address.",
    passwordLength:"Password must be at least 6 characters.",
    quotes:[
      "Small steps daily become giant leaps yearly.",
      "Discipline is choosing what you want most over what you want now.",
      "The secret of your future is hidden in your daily routine.",
      "We are what we repeatedly do.",
      "Success is the sum of small efforts, repeated day in and day out.",
    ]
  },
  es:{
    appName:"Pulse", perfectDay:"Dia Perfecto 🏆",
    today:"Hoy", stats:"Estadisticas", noHabits:"Sin habitos aun",
    noHabitsDesc:"Toca abajo para empezar a construir tu mejor yo",
    addHabit:"Agregar Habito", done:"hecho",
    freePlan:"Plan Gratuito", habits:"habitos",
    upgradeDesc:"Mejora para habitos y estadisticas ilimitadas",
    goPro:"Ir Pro", signInTitle:"Inicia sesion para guardar tus datos",
    signInDesc:"Tus habitos solo se almacenan localmente hasta que crees una cuenta.",
    signUp:"Registrarse", logIn:"Iniciar sesion", createAccount:"Crear Cuenta",
    welcomeBack:"Bienvenido de nuevo", yourName:"Tu nombre",
    emailAddress:"Correo electronico", password:"Contrasena (min. 6 caracteres)",
    forgotPassword:"Olvide mi contrasena", alreadyHaveAccount:"Ya tienes una cuenta?",
    noAccount:"No tienes una cuenta?", continueBtn:"Continuar",
    checkEmail:"Revisa tu correo!", emailSent:"Correo enviado!",
    didntReceive:"No lo recibiste?", resendEmail:"Reenviar correo de verificacion",
    goToLogin:"Ir a Iniciar sesion", backToLogin:"Volver a Iniciar sesion",
    backToLoginLink:"Volver al inicio de sesion", resetPassword:"Restablecer Contrasena",
    sendResetLink:"Enviar enlace de restablecimiento", enterEmailReset:"Ingresa tu correo y te enviaremos un enlace.",
    account:"Cuenta", notSignedIn:"No has iniciado sesion",
    notSignedInDesc:"Crea una cuenta para sincronizar habitos y desbloquear Pro.",
    upgradePro:"Mejorar a Pro", proActive:"Pro activo - gracias por apoyar Pulse!",
    signOut:"Cerrar sesion", deleteAccount:"Eliminar cuenta",
    deleteConfirmTitle:"Eliminar cuenta?",
    deleteConfirmDesc:"Esto elimina permanentemente tu cuenta, todos los habitos e historial de rachas. Esto no se puede deshacer.",
    cancel:"Cancelar", delete:"Eliminar",
    language:"Idioma", currency:"Moneda",
    appLanguage:"Idioma de la aplicacion", pricingCurrency:"Moneda de precios",
    upgradeTitle:"Mejorar a Pro", unlockPotential:"Desbloquea todo tu potencial.",
    unlimitedHabits:"Habitos ilimitados", noMoreLimits:"Sin mas limites",
    advancedStats:"Estadisticas avanzadas", statsDesc:"Vistas de 30 dias y tasas de completado",
    streakEditing:"Edicion de racha", fixMissedDay:"Corrige cualquier dia perdido",
    reminders:"Recordatorios", neverBreak:"Nunca rompas tu cadena",
    monthly:"MENSUAL", annual:"ANUAL", perMonth:"por mes", perYear:"por ano",
    bestValue:"MEJOR VALOR", upgradeNow:"Mejorar ahora", signUpGoPro:"Registrarse e ir Pro",
    cancelAnytime:"Cancela en cualquier momento - garantia de 7 dias",
    statsTitle:"Tu Progreso", statsProOnly:"Las estadisticas son solo Pro",
    statsProDesc:"Desbloquea mapas de calor detallados de 30 dias y estadisticas.",
    unlockStats:"Desbloquear Estadisticas - Ir Pro", addHabitsStats:"Agrega habitos para ver tus estadisticas",
    totalCompletions:"completados en total", lastThirtyDays:"Ultimos 30 dias",
    dayStreak:"dias de racha", currentStreak:"Racha actual",
    totalDays:"Dias totales", thirtyDayRate:"Tasa 30d",
    editStreak:"Editar Racha", tapDayToggle:"Toca cualquier dia para alternar",
    newHabit:"Nuevo Habito", editHabit:"Editar Habito", habitName:"Nombre del habito...",
    icon:"Icono", color:"Color", saveChanges:"Guardar cambios",
    passwordStrength:"Seguridad de contrasena", weak:"Debil", fair:"Regular", good:"Buena", strong:"Fuerte",
    verified:"Verificado", freePlanBadge:"Plan Gratuito",
    incorrectPassword:"Correo o contrasena incorrectos.",
    accountDeleted:"Esta cuenta ya no existe.",
    noAccountFound:"No se encontro ninguna cuenta con ese correo.",
    fillAllFields:"Por favor completa todos los campos.",
    enterName:"Por favor ingresa tu nombre.",
    validEmail:"Ingresa una direccion de correo valida.",
    passwordLength:"La contrasena debe tener al menos 6 caracteres.",
    quotes:[
      "Pequenos pasos diarios se convierten en grandes saltos anuales.",
      "La disciplina es elegir lo que mas quieres sobre lo que quieres ahora.",
      "El secreto de tu futuro esta oculto en tu rutina diaria.",
      "Somos lo que hacemos repetidamente.",
      "El exito es la suma de pequenos esfuerzos repetidos dia tras dia.",
    ]
  },
  fr:{
    appName:"Pulse", perfectDay:"Journee Parfaite 🏆",
    today:"Aujourd'hui", stats:"Statistiques", noHabits:"Pas encore d'habitudes",
    noHabitsDesc:"Appuyez ci-dessous pour commencer a construire votre meilleur moi",
    addHabit:"Ajouter une habitude", done:"fait",
    freePlan:"Plan Gratuit", habits:"habitudes",
    upgradeDesc:"Passez a la version superieure pour des habitudes et statistiques illimitees",
    goPro:"Passer Pro", signInTitle:"Connectez-vous pour sauvegarder vos donnees",
    signInDesc:"Vos habitudes ne sont stockees que localement jusqu'a la creation d'un compte.",
    signUp:"S'inscrire", logIn:"Se connecter", createAccount:"Creer un compte",
    welcomeBack:"Bon retour", yourName:"Votre nom",
    emailAddress:"Adresse e-mail", password:"Mot de passe (min. 6 caracteres)",
    forgotPassword:"Mot de passe oublie?", alreadyHaveAccount:"Vous avez deja un compte?",
    noAccount:"Vous n'avez pas de compte?", continueBtn:"Continuer",
    checkEmail:"Verifiez votre e-mail!", emailSent:"E-mail envoye!",
    didntReceive:"Vous ne l'avez pas recu?", resendEmail:"Renvoyer l'e-mail de verification",
    goToLogin:"Aller a la connexion", backToLogin:"Retour a la connexion",
    backToLoginLink:"Retour a la connexion", resetPassword:"Reinitialiser le mot de passe",
    sendResetLink:"Envoyer le lien de reinitialisation", enterEmailReset:"Entrez votre e-mail et nous vous enverrons un lien.",
    account:"Compte", notSignedIn:"Vous n'etes pas connecte",
    notSignedInDesc:"Creez un compte pour synchroniser les habitudes et debloquer Pro.",
    upgradePro:"Passer a Pro", proActive:"Pro actif - merci de soutenir Pulse!",
    signOut:"Se deconnecter", deleteAccount:"Supprimer le compte",
    deleteConfirmTitle:"Supprimer le compte?",
    deleteConfirmDesc:"Cela supprime definitivement votre compte, toutes les habitudes et l'historique. Cela ne peut pas etre annule.",
    cancel:"Annuler", delete:"Supprimer",
    language:"Langue", currency:"Devise",
    appLanguage:"Langue d'affichage", pricingCurrency:"Devise d'affichage des prix",
    upgradeTitle:"Passer a Pro", unlockPotential:"Liberez tout votre potentiel.",
    unlimitedHabits:"Habitudes illimitees", noMoreLimits:"Plus de limites",
    advancedStats:"Statistiques avancees", statsDesc:"Vues sur 30 jours et taux de completion",
    streakEditing:"Edition de serie", fixMissedDay:"Corrigez n'importe quel jour manque",
    reminders:"Rappels", neverBreak:"Ne brisez jamais votre chaine",
    monthly:"MENSUEL", annual:"ANNUEL", perMonth:"par mois", perYear:"par an",
    bestValue:"MEILLEURE VALEUR", upgradeNow:"Mettre a niveau maintenant", signUpGoPro:"S'inscrire et passer Pro",
    cancelAnytime:"Annuler a tout moment - garantie de 7 jours",
    statsTitle:"Votre Progres", statsProOnly:"Les statistiques sont reservees aux Pro",
    statsProDesc:"Debloquez des cartes thermiques detaillees sur 30 jours et des analyses.",
    unlockStats:"Debloquer les statistiques - Passer Pro", addHabitsStats:"Ajoutez des habitudes pour voir vos statistiques",
    totalCompletions:"completions au total", lastThirtyDays:"30 derniers jours",
    dayStreak:"jours de serie", currentStreak:"Serie actuelle",
    totalDays:"Jours totaux", thirtyDayRate:"Taux 30j",
    editStreak:"Modifier la serie", tapDayToggle:"Appuyez sur n'importe quel jour pour basculer",
    newHabit:"Nouvelle habitude", editHabit:"Modifier l'habitude", habitName:"Nom de l'habitude...",
    icon:"Icone", color:"Couleur", saveChanges:"Sauvegarder les modifications",
    passwordStrength:"Force du mot de passe", weak:"Faible", fair:"Moyen", good:"Bon", strong:"Fort",
    verified:"Verifie", freePlanBadge:"Plan Gratuit",
    incorrectPassword:"E-mail ou mot de passe incorrect.",
    accountDeleted:"Ce compte n'existe plus.",
    noAccountFound:"Aucun compte trouve avec cet e-mail.",
    fillAllFields:"Veuillez remplir tous les champs.",
    enterName:"Veuillez entrer votre nom.",
    validEmail:"Entrez une adresse e-mail valide.",
    passwordLength:"Le mot de passe doit comporter au moins 6 caracteres.",
    quotes:[
      "De petits pas quotidiens deviennent de grands bonds annuels.",
      "La discipline consiste a choisir ce que vous voulez le plus.",
      "Le secret de votre avenir est cache dans votre routine quotidienne.",
      "Nous sommes ce que nous faisons repetitivement.",
      "Le succes est la somme de petits efforts repetes jour apres jour.",
    ]
  },
  de:{
    appName:"Pulse", perfectDay:"Perfekter Tag 🏆",
    today:"Heute", stats:"Statistiken", noHabits:"Noch keine Gewohnheiten",
    noHabitsDesc:"Tippe unten, um dein bestes Ich aufzubauen",
    addHabit:"Gewohnheit hinzufugen", done:"erledigt",
    freePlan:"Kostenloser Plan", habits:"Gewohnheiten",
    upgradeDesc:"Upgrade fur unbegrenzte Gewohnheiten und Statistiken",
    goPro:"Pro werden", signInTitle:"Anmelden um Daten zu speichern",
    signInDesc:"Deine Gewohnheiten werden nur lokal gespeichert bis du ein Konto erstellst.",
    signUp:"Registrieren", logIn:"Anmelden", createAccount:"Konto erstellen",
    welcomeBack:"Willkommen zuruck", yourName:"Dein Name",
    emailAddress:"E-Mail-Adresse", password:"Passwort (min. 6 Zeichen)",
    forgotPassword:"Passwort vergessen?", alreadyHaveAccount:"Hast du bereits ein Konto?",
    noAccount:"Hast du kein Konto?", continueBtn:"Weiter",
    checkEmail:"Uberpruf deine E-Mail!", emailSent:"E-Mail gesendet!",
    didntReceive:"Nicht erhalten?", resendEmail:"Bestatigungsmail erneut senden",
    goToLogin:"Zur Anmeldung", backToLogin:"Zuruck zur Anmeldung",
    backToLoginLink:"Zuruck zur Anmeldung", resetPassword:"Passwort zurucksetzen",
    sendResetLink:"Reset-Link senden", enterEmailReset:"Gib deine E-Mail ein und wir senden dir einen Link.",
    account:"Konto", notSignedIn:"Du bist nicht angemeldet",
    notSignedInDesc:"Erstelle ein Konto um Gewohnheiten zu synchronisieren und Pro freizuschalten.",
    upgradePro:"Auf Pro upgraden", proActive:"Pro aktiv - danke fur deine Unterstutzung!",
    signOut:"Abmelden", deleteAccount:"Konto loschen",
    deleteConfirmTitle:"Konto loschen?",
    deleteConfirmDesc:"Dies loscht dauerhaft dein Konto, alle Gewohnheiten und den Streak-Verlauf. Dies kann nicht ruckgangig gemacht werden.",
    cancel:"Abbrechen", delete:"Loschen",
    language:"Sprache", currency:"Wahrung",
    appLanguage:"App-Anzeigesprache", pricingCurrency:"Preisanzeigewahrung",
    upgradeTitle:"Auf Pro upgraden", unlockPotential:"Entfalte dein volles Potenzial.",
    unlimitedHabits:"Unbegrenzte Gewohnheiten", noMoreLimits:"Keine Grenzen mehr",
    advancedStats:"Erweiterte Statistiken", statsDesc:"30-Tage-Ansichten und Abschlussraten",
    streakEditing:"Streak-Bearbeitung", fixMissedDay:"Korrigiere jeden verpassten Tag",
    reminders:"Erinnerungen", neverBreak:"Brich deine Kette nie",
    monthly:"MONATLICH", annual:"JAHRLICH", perMonth:"pro Monat", perYear:"pro Jahr",
    bestValue:"BESTER WERT", upgradeNow:"Jetzt upgraden", signUpGoPro:"Registrieren und Pro werden",
    cancelAnytime:"Jederzeit kundbar - 7-Tage-Geld-zuruck-Garantie",
    statsTitle:"Dein Fortschritt", statsProOnly:"Statistiken sind nur fur Pro",
    statsProDesc:"Schalte detaillierte 30-Tage-Heatmaps und Analysen frei.",
    unlockStats:"Statistiken freischalten - Pro werden", addHabitsStats:"Fugen Gewohnheiten hinzu um Statistiken zu sehen",
    totalCompletions:"Abschlusse insgesamt", lastThirtyDays:"Letzte 30 Tage",
    dayStreak:"Tage Streak", currentStreak:"Aktueller Streak",
    totalDays:"Gesamttage", thirtyDayRate:"30T-Rate",
    editStreak:"Streak bearbeiten", tapDayToggle:"Tippe auf einen Tag zum Umschalten",
    newHabit:"Neue Gewohnheit", editHabit:"Gewohnheit bearbeiten", habitName:"Name der Gewohnheit...",
    icon:"Symbol", color:"Farbe", saveChanges:"Anderungen speichern",
    passwordStrength:"Passwortsicherheit", weak:"Schwach", fair:"Mittel", good:"Gut", strong:"Stark",
    verified:"Verifiziert", freePlanBadge:"Kostenloser Plan",
    incorrectPassword:"Falsche E-Mail oder falsches Passwort.",
    accountDeleted:"Dieses Konto existiert nicht mehr.",
    noAccountFound:"Kein Konto mit dieser E-Mail gefunden.",
    fillAllFields:"Bitte alle Felder ausfullen.",
    enterName:"Bitte gib deinen Namen ein.",
    validEmail:"Gib eine gultige E-Mail-Adresse ein.",
    passwordLength:"Das Passwort muss mindestens 6 Zeichen haben.",
    quotes:[
      "Kleine tagliche Schritte werden zu grosen jahrlichen Sprunen.",
      "Disziplin bedeutet, das zu wahlen, was du am meisten willst.",
      "Das Geheimnis deiner Zukunft steckt in deiner taglichen Routine.",
      "Wir sind, was wir wiederholt tun.",
      "Erfolg ist die Summe kleiner Anstrengungen, die Tag fur Tag wiederholt werden.",
    ]
  },
  pt:{
    appName:"Pulse", perfectDay:"Dia Perfeito 🏆",
    today:"Hoje", stats:"Estatisticas", noHabits:"Sem habitos ainda",
    noHabitsDesc:"Toque abaixo para comecar a construir seu melhor eu",
    addHabit:"Adicionar Habito", done:"feito",
    freePlan:"Plano Gratuito", habits:"habitos",
    upgradeDesc:"Atualize para habitos e estatisticas ilimitados",
    goPro:"Ir Pro", signInTitle:"Entre para salvar seus dados",
    signInDesc:"Seus habitos so sao armazenados localmente ate voce criar uma conta.",
    signUp:"Cadastrar", logIn:"Entrar", createAccount:"Criar Conta",
    welcomeBack:"Bem-vindo de volta", yourName:"Seu nome",
    emailAddress:"Endereco de e-mail", password:"Senha (min. 6 caracteres)",
    forgotPassword:"Esqueceu a senha?", alreadyHaveAccount:"Ja tem uma conta?",
    noAccount:"Nao tem uma conta?", continueBtn:"Continuar",
    checkEmail:"Verifique seu e-mail!", emailSent:"E-mail enviado!",
    didntReceive:"Nao recebeu?", resendEmail:"Reenviar e-mail de verificacao",
    goToLogin:"Ir para Login", backToLogin:"Voltar ao Login",
    backToLoginLink:"Voltar ao login", resetPassword:"Redefinir Senha",
    sendResetLink:"Enviar link de redefinicao", enterEmailReset:"Digite seu e-mail e enviaremos um link.",
    account:"Conta", notSignedIn:"Voce nao esta conectado",
    notSignedInDesc:"Crie uma conta para sincronizar habitos e desbloquear o Pro.",
    upgradePro:"Atualizar para Pro", proActive:"Pro ativo - obrigado por apoiar o Pulse!",
    signOut:"Sair", deleteAccount:"Excluir conta",
    deleteConfirmTitle:"Excluir conta?",
    deleteConfirmDesc:"Isso exclui permanentemente sua conta, todos os habitos e historico. Isso nao pode ser desfeito.",
    cancel:"Cancelar", delete:"Excluir",
    language:"Idioma", currency:"Moeda",
    appLanguage:"Idioma de exibicao", pricingCurrency:"Moeda de exibicao de precos",
    upgradeTitle:"Atualizar para Pro", unlockPotential:"Desbloqueie todo o seu potencial.",
    unlimitedHabits:"Habitos ilimitados", noMoreLimits:"Sem mais limites",
    advancedStats:"Estatisticas avancadas", statsDesc:"Visualizacoes de 30 dias e taxas de conclusao",
    streakEditing:"Edicao de sequencia", fixMissedDay:"Corrija qualquer dia perdido",
    reminders:"Lembretes", neverBreak:"Nunca quebre sua corrente",
    monthly:"MENSAL", annual:"ANUAL", perMonth:"por mes", perYear:"por ano",
    bestValue:"MELHOR VALOR", upgradeNow:"Atualizar agora", signUpGoPro:"Cadastrar e ir Pro",
    cancelAnytime:"Cancele a qualquer momento - garantia de 7 dias",
    statsTitle:"Seu Progresso", statsProOnly:"Estatisticas sao apenas Pro",
    statsProDesc:"Desbloqueie mapas de calor detalhados de 30 dias e analises.",
    unlockStats:"Desbloquear Estatisticas - Ir Pro", addHabitsStats:"Adicione habitos para ver suas estatisticas",
    totalCompletions:"conclusoes no total", lastThirtyDays:"Ultimos 30 dias",
    dayStreak:"dias de sequencia", currentStreak:"Sequencia atual",
    totalDays:"Dias totais", thirtyDayRate:"Taxa 30d",
    editStreak:"Editar Sequencia", tapDayToggle:"Toque em qualquer dia para alternar",
    newHabit:"Novo Habito", editHabit:"Editar Habito", habitName:"Nome do habito...",
    icon:"Icone", color:"Cor", saveChanges:"Salvar alteracoes",
    passwordStrength:"Forca da senha", weak:"Fraca", fair:"Regular", good:"Boa", strong:"Forte",
    verified:"Verificado", freePlanBadge:"Plano Gratuito",
    incorrectPassword:"E-mail ou senha incorretos.",
    accountDeleted:"Esta conta nao existe mais.",
    noAccountFound:"Nenhuma conta encontrada com esse e-mail.",
    fillAllFields:"Por favor preencha todos os campos.",
    enterName:"Por favor insira seu nome.",
    validEmail:"Digite um endereco de e-mail valido.",
    passwordLength:"A senha deve ter pelo menos 6 caracteres.",
    quotes:[
      "Pequenos passos diarios se tornam grandes saltos anuais.",
      "Disciplina e escolher o que voce mais quer.",
      "O segredo do seu futuro esta escondido na sua rotina diaria.",
      "Somos o que fazemos repetidamente.",
      "O sucesso e a soma de pequenos esforcos repetidos dia apos dia.",
    ]
  },
  it:{
    appName:"Pulse", perfectDay:"Giorno Perfetto 🏆",
    today:"Oggi", stats:"Statistiche", noHabits:"Ancora nessuna abitudine",
    noHabitsDesc:"Tocca qui sotto per iniziare a costruire il tuo migliore io",
    addHabit:"Aggiungi Abitudine", done:"fatto",
    freePlan:"Piano Gratuito", habits:"abitudini",
    upgradeDesc:"Aggiorna per abitudini e statistiche illimitate",
    goPro:"Vai Pro", signInTitle:"Accedi per salvare i tuoi dati",
    signInDesc:"Le tue abitudini sono memorizzate solo localmente finche non crei un account.",
    signUp:"Registrati", logIn:"Accedi", createAccount:"Crea Account",
    welcomeBack:"Bentornato", yourName:"Il tuo nome",
    emailAddress:"Indirizzo e-mail", password:"Password (min. 6 caratteri)",
    forgotPassword:"Password dimenticata?", alreadyHaveAccount:"Hai gia un account?",
    noAccount:"Non hai un account?", continueBtn:"Continua",
    checkEmail:"Controlla la tua e-mail!", emailSent:"E-mail inviata!",
    didntReceive:"Non l'hai ricevuta?", resendEmail:"Invia di nuovo l'e-mail di verifica",
    goToLogin:"Vai all'accesso", backToLogin:"Torna all'accesso",
    backToLoginLink:"Torna all'accesso", resetPassword:"Reimposta Password",
    sendResetLink:"Invia link di reimpostazione", enterEmailReset:"Inserisci la tua e-mail e ti invieremo un link.",
    account:"Account", notSignedIn:"Non sei connesso",
    notSignedInDesc:"Crea un account per sincronizzare le abitudini e sbloccare Pro.",
    upgradePro:"Aggiorna a Pro", proActive:"Pro attivo - grazie per supportare Pulse!",
    signOut:"Esci", deleteAccount:"Elimina account",
    deleteConfirmTitle:"Eliminare l'account?",
    deleteConfirmDesc:"Questo elimina definitivamente il tuo account, tutte le abitudini e la cronologia. Non puo essere annullato.",
    cancel:"Annulla", delete:"Elimina",
    language:"Lingua", currency:"Valuta",
    appLanguage:"Lingua di visualizzazione", pricingCurrency:"Valuta di visualizzazione prezzi",
    upgradeTitle:"Aggiorna a Pro", unlockPotential:"Sblocca tutto il tuo potenziale.",
    unlimitedHabits:"Abitudini illimitate", noMoreLimits:"Nessun altro limite",
    advancedStats:"Statistiche avanzate", statsDesc:"Visualizzazioni di 30 giorni e tassi di completamento",
    streakEditing:"Modifica serie", fixMissedDay:"Correggi qualsiasi giorno perso",
    reminders:"Promemoria", neverBreak:"Non spezzare mai la tua catena",
    monthly:"MENSILE", annual:"ANNUALE", perMonth:"al mese", perYear:"all'anno",
    bestValue:"MIGLIOR VALORE", upgradeNow:"Aggiorna ora", signUpGoPro:"Registrati e vai Pro",
    cancelAnytime:"Cancella in qualsiasi momento - garanzia di 7 giorni",
    statsTitle:"Il Tuo Progresso", statsProOnly:"Le statistiche sono solo per Pro",
    statsProDesc:"Sblocca mappe di calore dettagliate di 30 giorni e analisi.",
    unlockStats:"Sblocca Statistiche - Vai Pro", addHabitsStats:"Aggiungi abitudini per vedere le tue statistiche",
    totalCompletions:"completamenti in totale", lastThirtyDays:"Ultimi 30 giorni",
    dayStreak:"giorni di serie", currentStreak:"Serie attuale",
    totalDays:"Giorni totali", thirtyDayRate:"Tasso 30g",
    editStreak:"Modifica Serie", tapDayToggle:"Tocca qualsiasi giorno per alternare",
    newHabit:"Nuova Abitudine", editHabit:"Modifica Abitudine", habitName:"Nome dell'abitudine...",
    icon:"Icona", color:"Colore", saveChanges:"Salva modifiche",
    passwordStrength:"Forza password", weak:"Debole", fair:"Discreta", good:"Buona", strong:"Forte",
    verified:"Verificato", freePlanBadge:"Piano Gratuito",
    incorrectPassword:"E-mail o password errati.",
    accountDeleted:"Questo account non esiste piu.",
    noAccountFound:"Nessun account trovato con quella e-mail.",
    fillAllFields:"Per favore compila tutti i campi.",
    enterName:"Per favore inserisci il tuo nome.",
    validEmail:"Inserisci un indirizzo e-mail valido.",
    passwordLength:"La password deve avere almeno 6 caratteri.",
    quotes:[
      "Piccoli passi quotidiani diventano grandi salti annuali.",
      "La disciplina e scegliere cio che vuoi di piu.",
      "Il segreto del tuo futuro e nascosto nella tua routine quotidiana.",
      "Siamo cio che facciamo ripetutamente.",
      "Il successo e la somma di piccoli sforzi ripetuti giorno dopo giorno.",
    ]
  },
  ja:{
    appName:"Pulse", perfectDay:"完璧な一日 🏆",
    today:"今日", stats:"統計", noHabits:"まだ習慣がありません",
    noHabitsDesc:"下のボタンで最高の自分を作り始めましょう",
    addHabit:"習慣を追加", done:"完了",
    freePlan:"無料プラン", habits:"習慣",
    upgradeDesc:"無制限の習慣と統計のためにアップグレード",
    goPro:"Proにする", signInTitle:"データを保存するためにサインイン",
    signInDesc:"アカウントを作成するまで習慣はローカルにのみ保存されます。",
    signUp:"登録", logIn:"ログイン", createAccount:"アカウント作成",
    welcomeBack:"おかえりなさい", yourName:"あなたの名前",
    emailAddress:"メールアドレス", password:"パスワード（最低6文字）",
    forgotPassword:"パスワードを忘れましたか？", alreadyHaveAccount:"すでにアカウントをお持ちですか？",
    noAccount:"アカウントをお持ちでないですか？", continueBtn:"続ける",
    checkEmail:"メールを確認してください！", emailSent:"メールを送信しました！",
    didntReceive:"届きませんでしたか？", resendEmail:"確認メールを再送信",
    goToLogin:"ログインへ", backToLogin:"ログインに戻る",
    backToLoginLink:"ログインに戻る", resetPassword:"パスワードをリセット",
    sendResetLink:"リセットリンクを送信", enterEmailReset:"メールアドレスを入力してリンクをお送りします。",
    account:"アカウント", notSignedIn:"サインインしていません",
    notSignedInDesc:"アカウントを作成して習慣を同期しProをアンロックしましょう。",
    upgradePro:"Proにアップグレード", proActive:"Pro有効 - Pulseをサポートありがとうございます！",
    signOut:"サインアウト", deleteAccount:"アカウントを削除",
    deleteConfirmTitle:"アカウントを削除しますか？",
    deleteConfirmDesc:"これにより、アカウント、すべての習慣、ストリーク履歴が完全に削除されます。元に戻せません。",
    cancel:"キャンセル", delete:"削除",
    language:"言語", currency:"通貨",
    appLanguage:"アプリ表示言語", pricingCurrency:"価格表示通貨",
    upgradeTitle:"Proにアップグレード", unlockPotential:"あなたの可能性を解放しましょう。",
    unlimitedHabits:"無制限の習慣", noMoreLimits:"制限なし",
    advancedStats:"高度な統計", statsDesc:"30日間のビューと完了率",
    streakEditing:"ストリーク編集", fixMissedDay:"見逃した日を修正",
    reminders:"リマインダー", neverBreak:"チェーンを絶対に壊さない",
    monthly:"月額", annual:"年額", perMonth:"月あたり", perYear:"年あたり",
    bestValue:"最高のお得", upgradeNow:"今すぐアップグレード", signUpGoPro:"登録してProに",
    cancelAnytime:"いつでもキャンセル可能 - 7日間返金保証",
    statsTitle:"あなたの進捗", statsProOnly:"統計はProのみ",
    statsProDesc:"詳細な30日間のヒートマップと分析をアンロック。",
    unlockStats:"統計をアンロック - Proへ", addHabitsStats:"統計を見るには習慣を追加してください",
    totalCompletions:"合計完了", lastThirtyDays:"過去30日間",
    dayStreak:"日間ストリーク", currentStreak:"現在のストリーク",
    totalDays:"合計日数", thirtyDayRate:"30日率",
    editStreak:"ストリークを編集", tapDayToggle:"任意の日をタップして切り替え",
    newHabit:"新しい習慣", editHabit:"習慣を編集", habitName:"習慣の名前...",
    icon:"アイコン", color:"色", saveChanges:"変更を保存",
    passwordStrength:"パスワード強度", weak:"弱い", fair:"普通", good:"良い", strong:"強い",
    verified:"確認済み", freePlanBadge:"無料プラン",
    incorrectPassword:"メールアドレスまたはパスワードが正しくありません。",
    accountDeleted:"このアカウントはもう存在しません。",
    noAccountFound:"そのメールアドレスのアカウントが見つかりません。",
    fillAllFields:"すべてのフィールドを入力してください。",
    enterName:"名前を入力してください。",
    validEmail:"有効なメールアドレスを入力してください。",
    passwordLength:"パスワードは6文字以上必要です。",
    quotes:[
      "毎日の小さな一歩が、年間の大きな飛躍になります。",
      "規律とは、今欲しいものより最も欲しいものを選ぶことです。",
      "あなたの未来の秘密は日常のルーティンに隠れています。",
      "私たちは繰り返し行うことそのものです。",
      "成功とは、毎日繰り返される小さな努力の積み重ねです。",
    ]
  },
  zh:{
    appName:"Pulse", perfectDay:"完美的一天 🏆",
    today:"今天", stats:"统计", noHabits:"还没有习惯",
    noHabitsDesc:"点击下方开始构建最好的自己",
    addHabit:"添加习惯", done:"完成",
    freePlan:"免费计划", habits:"习惯",
    upgradeDesc:"升级以获得无限习惯和统计",
    goPro:"升级Pro", signInTitle:"登录以保存您的数据",
    signInDesc:"在您创建帐户之前，您的习惯只存储在本地。",
    signUp:"注册", logIn:"登录", createAccount:"创建帐户",
    welcomeBack:"欢迎回来", yourName:"您的姓名",
    emailAddress:"电子邮件地址", password:"密码（最少6个字符）",
    forgotPassword:"忘记密码？", alreadyHaveAccount:"已有帐户？",
    noAccount:"没有帐户？", continueBtn:"继续",
    checkEmail:"检查您的电子邮件！", emailSent:"电子邮件已发送！",
    didntReceive:"没有收到？", resendEmail:"重新发送验证邮件",
    goToLogin:"前往登录", backToLogin:"返回登录",
    backToLoginLink:"返回登录", resetPassword:"重置密码",
    sendResetLink:"发送重置链接", enterEmailReset:"输入您的电子邮件，我们将向您发送链接。",
    account:"帐户", notSignedIn:"您未登录",
    notSignedInDesc:"创建帐户以同步习惯并解锁Pro。",
    upgradePro:"升级到Pro", proActive:"Pro已激活 - 感谢您支持Pulse！",
    signOut:"退出登录", deleteAccount:"删除帐户",
    deleteConfirmTitle:"删除帐户？",
    deleteConfirmDesc:"这将永久删除您的帐户、所有习惯和连续记录。此操作无法撤销。",
    cancel:"取消", delete:"删除",
    language:"语言", currency:"货币",
    appLanguage:"应用显示语言", pricingCurrency:"价格显示货币",
    upgradeTitle:"升级到Pro", unlockPotential:"释放您的全部潜力。",
    unlimitedHabits:"无限习惯", noMoreLimits:"不再有限制",
    advancedStats:"高级统计", statsDesc:"30天视图和完成率",
    streakEditing:"编辑连续记录", fixMissedDay:"修复任何遗漏的日期",
    reminders:"提醒", neverBreak:"永远不要打破你的链条",
    monthly:"月度", annual:"年度", perMonth:"每月", perYear:"每年",
    bestValue:"最佳价值", upgradeNow:"立即升级", signUpGoPro:"注册并升级Pro",
    cancelAnytime:"随时取消 - 7天退款保证",
    statsTitle:"您的进度", statsProOnly:"统计仅限Pro",
    statsProDesc:"解锁详细的30天热图和分析。",
    unlockStats:"解锁统计 - 升级Pro", addHabitsStats:"添加习惯以查看统计",
    totalCompletions:"总完成次数", lastThirtyDays:"最近30天",
    dayStreak:"天连续", currentStreak:"当前连续",
    totalDays:"总天数", thirtyDayRate:"30天率",
    editStreak:"编辑连续", tapDayToggle:"点击任意一天切换",
    newHabit:"新习惯", editHabit:"编辑习惯", habitName:"习惯名称...",
    icon:"图标", color:"颜色", saveChanges:"保存更改",
    passwordStrength:"密码强度", weak:"弱", fair:"一般", good:"好", strong:"强",
    verified:"已验证", freePlanBadge:"免费计划",
    incorrectPassword:"电子邮件或密码不正确。",
    accountDeleted:"此帐户不再存在。",
    noAccountFound:"未找到该电子邮件的帐户。",
    fillAllFields:"请填写所有字段。",
    enterName:"请输入您的姓名。",
    validEmail:"请输入有效的电子邮件地址。",
    passwordLength:"密码必须至少6个字符。",
    quotes:[
      "每天的小步骤成就每年的大飞跃。",
      "自律就是选择你最想要的而不是你现在想要的。",
      "你未来的秘密隐藏在你的日常生活中。",
      "我们是我们反复做的事情。",
      "成功是每天重复的小努力之和。",
    ]
  },
  ar:{
    appName:"Pulse", perfectDay:"يوم مثالي 🏆",
    today:"اليوم", stats:"الاحصائيات", noHabits:"لا توجد عادات بعد",
    noHabitsDesc:"اضغط ادناه لبدء بناء افضل نسخة من نفسك",
    addHabit:"اضافة عادة", done:"تم",
    freePlan:"الخطة المجانية", habits:"عادات",
    upgradeDesc:"قم بالترقية للحصول على عادات واحصائيات غير محدودة",
    goPro:"الترقية لـ Pro", signInTitle:"سجل الدخول لحفظ بياناتك",
    signInDesc:"يتم تخزين عاداتك محليا فقط حتى تقوم بانشاء حساب.",
    signUp:"التسجيل", logIn:"تسجيل الدخول", createAccount:"انشاء حساب",
    welcomeBack:"مرحبا بعودتك", yourName:"اسمك",
    emailAddress:"عنوان البريد الالكتروني", password:"كلمة المرور (6 احرف على الاقل)",
    forgotPassword:"نسيت كلمة المرور؟", alreadyHaveAccount:"لديك حساب بالفعل؟",
    noAccount:"ليس لديك حساب؟", continueBtn:"متابعة",
    checkEmail:"تحقق من بريدك الالكتروني!", emailSent:"تم ارسال البريد الالكتروني!",
    didntReceive:"لم تستلمه؟", resendEmail:"اعادة ارسال بريد التحقق",
    goToLogin:"الذهاب لتسجيل الدخول", backToLogin:"العودة لتسجيل الدخول",
    backToLoginLink:"العودة لتسجيل الدخول", resetPassword:"اعادة تعيين كلمة المرور",
    sendResetLink:"ارسال رابط اعادة التعيين", enterEmailReset:"ادخل بريدك الالكتروني وسنرسل لك رابطا.",
    account:"الحساب", notSignedIn:"لم تسجل الدخول",
    notSignedInDesc:"انشئ حسابا لمزامنة العادات وفتح Pro.",
    upgradePro:"الترقية الى Pro", proActive:"Pro نشط - شكرا لدعمك لـ Pulse!",
    signOut:"تسجيل الخروج", deleteAccount:"حذف الحساب",
    deleteConfirmTitle:"حذف الحساب؟",
    deleteConfirmDesc:"سيؤدي هذا الى حذف حسابك وجميع العادات والسجل نهائيا. لا يمكن التراجع عن ذلك.",
    cancel:"الغاء", delete:"حذف",
    language:"اللغة", currency:"العملة",
    appLanguage:"لغة عرض التطبيق", pricingCurrency:"عملة عرض الاسعار",
    upgradeTitle:"الترقية الى Pro", unlockPotential:"افتح كامل امكاناتك.",
    unlimitedHabits:"عادات غير محدودة", noMoreLimits:"لا مزيد من القيود",
    advancedStats:"احصائيات متقدمة", statsDesc:"عروض 30 يوما ومعدلات الاكتمال",
    streakEditing:"تعديل الانتظام", fixMissedDay:"صحح اي يوم فائت",
    reminders:"التذكيرات", neverBreak:"لا تكسر سلسلتك ابدا",
    monthly:"شهري", annual:"سنوي", perMonth:"في الشهر", perYear:"في السنة",
    bestValue:"افضل قيمة", upgradeNow:"الترقية الان", signUpGoPro:"سجل وانتقل الى Pro",
    cancelAnytime:"الغاء في اي وقت - ضمان استرداد 7 ايام",
    statsTitle:"تقدمك", statsProOnly:"الاحصائيات لـ Pro فقط",
    statsProDesc:"افتح خرائط حرارة تفصيلية لمدة 30 يوما وتحليلات.",
    unlockStats:"فتح الاحصائيات - الانتقال الى Pro", addHabitsStats:"اضف عادات لرؤية احصائياتك",
    totalCompletions:"اجمالي الاكتمالات", lastThirtyDays:"اخر 30 يوما",
    dayStreak:"يوم متتالي", currentStreak:"الانتظام الحالي",
    totalDays:"اجمالي الايام", thirtyDayRate:"معدل 30 يوم",
    editStreak:"تعديل الانتظام", tapDayToggle:"اضغط على اي يوم للتبديل",
    newHabit:"عادة جديدة", editHabit:"تعديل العادة", habitName:"اسم العادة...",
    icon:"رمز", color:"لون", saveChanges:"حفظ التغييرات",
    passwordStrength:"قوة كلمة المرور", weak:"ضعيفة", fair:"متوسطة", good:"جيدة", strong:"قوية",
    verified:"تم التحقق", freePlanBadge:"الخطة المجانية",
    incorrectPassword:"البريد الالكتروني او كلمة المرور غير صحيحة.",
    accountDeleted:"هذا الحساب لم يعد موجودا.",
    noAccountFound:"لم يتم العثور على حساب بهذا البريد الالكتروني.",
    fillAllFields:"يرجى ملء جميع الحقول.",
    enterName:"يرجى ادخال اسمك.",
    validEmail:"ادخل عنوان بريد الكتروني صالحا.",
    passwordLength:"يجب ان تكون كلمة المرور 6 احرف على الاقل.",
    quotes:[
      "خطوات صغيرة يومية تصبح قفزات عملاقة سنوية.",
      "الانضباط هو اختيار ما تريده اكثر على ما تريده الان.",
      "سر مستقبلك مخبا في روتينك اليومي.",
      "نحن ما نفعله بشكل متكرر.",
      "النجاح هو مجموع الجهود الصغيرة المتكررة يوما بعد يوم.",
    ]
  },
};

function todayKey() { return new Date().toISOString().split("T")[0]; }

function getStreak(logs, id) {
  let s = 0; const t = new Date();
  for (let i = 0; i < 365; i++) {
    const d = new Date(t); d.setDate(t.getDate() - i);
    if (logs[d.toISOString().split("T")[0]]?.[id]) s++; else break;
  }
  return s;
}
function getLast7(logs, id) {
  return Array.from({length:7},(_,i)=>{ const d=new Date(); d.setDate(d.getDate()-(6-i)); return d.toISOString().split("T")[0]; }).map(k=>!!logs[k]?.[id]);
}
function getLast30Keys() {
  return Array.from({length:30},(_,i)=>{ const d=new Date(); d.setDate(d.getDate()-(29-i)); return d.toISOString().split("T")[0]; });
}
function pwStrength(pw, t) {
  if (!pw) return {label:"",color:"transparent",width:"0%"};
  let s=0;
  if(pw.length>=6)s++; if(pw.length>=10)s++; if(/[A-Z]/.test(pw))s++; if(/[0-9]/.test(pw))s++; if(/[^A-Za-z0-9]/.test(pw))s++;
  if(s<=1) return {label:t.weak,  color:"#FF4D4D",width:"25%"};
  if(s<=2) return {label:t.fair,  color:"#FF8C42",width:"50%"};
  if(s<=3) return {label:t.good,  color:"#FFD166",width:"75%"};
  return           {label:t.strong,color:"#06D6A0",width:"100%"};
}

const EyeIcon = ({open}) => open
  ? <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
  : <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>;

// Theme definitions
const DARK_THEME = {
  bg:"#0A0A0F", bgCard:"#11111A", bgInput:"#13131C", bgModal:"#0F0F1A",
  bgTab:"#1E1E2A", bgHighlight:"#1A1A26",
  border:"#2A2A3A", borderLight:"#1E1E2A", borderFaint:"#1A1A26",
  text:"#F0EBE1", textMuted:"#666680", textFaint:"#444460", textVeryFaint:"#333350",
  orbOpacity:".15", navBg:"rgba(10,10,15,.9)",
  ringBg:"#1E1E2A", modalOverlay:"rgba(0,0,0,.78)",
  errBg:"#FF4D4D14", errBorder:"#FF4D4D44", errText:"#FF7070",
  infoBg:"#12122A", infoBorder:"#3A3A66", infoText:"#A0A0D0",
  settingsBorder:"#1A1A26",
};

const LIGHT_THEME = {
  bg:"#F5F0E8", bgCard:"#FFFDF8", bgInput:"#F0EBE0", bgModal:"#FDFAF4",
  bgTab:"#EDE8DC", bgHighlight:"#EDE8DC",
  border:"#D4CCB8", borderLight:"#DDD8CC", borderFaint:"#E5E0D4",
  text:"#1A1410", textMuted:"#6B6355", textFaint:"#8C8070", textVeryFaint:"#B0A898",
  orbOpacity:".08", navBg:"rgba(245,240,232,.92)",
  ringBg:"#DDD8CC", modalOverlay:"rgba(0,0,0,.5)",
  errBg:"#FF4D4D14", errBorder:"#FF4D4D44", errText:"#CC2200",
  infoBg:"#EDE8DC", infoBorder:"#C4BCAA", infoText:"#5A5040",
  settingsBorder:"#DDD8CC",
};

const PRO_THEMES = {
  midnight_purple:{
    name:"Midnight Purple", emoji:"💜",
    bg:"#0D0A1A", bgCard:"#130F24", bgInput:"#1A1530", bgModal:"#100D1E",
    bgTab:"#221B38", bgHighlight:"#1A1530",
    border:"#3A2E5A", borderLight:"#2A2240", borderFaint:"#1E1A30",
    text:"#EDE8FF", textMuted:"#7B6FA0", textFaint:"#5A5080", textVeryFaint:"#3A3060",
    orbOpacity:".18", navBg:"rgba(13,10,26,.9)",
    ringBg:"#2A2240", modalOverlay:"rgba(0,0,0,.82)",
    errBg:"#FF4D4D14", errBorder:"#FF4D4D44", errText:"#FF7070",
    infoBg:"#1A1530", infoBorder:"#3A2E5A", infoText:"#A090D0",
    settingsBorder:"#2A2240", accent:"#8B5CF6",
  },
  ocean_blue:{
    name:"Ocean Blue", emoji:"🌊",
    bg:"#050F1A", bgCard:"#081524", bgInput:"#0C1E30", bgModal:"#060F1E",
    bgTab:"#0F2240", bgHighlight:"#0C1E30",
    border:"#1A3A5A", borderLight:"#102A40", borderFaint:"#0A1E30",
    text:"#E0F0FF", textMuted:"#5A88AA", textFaint:"#3A6080", textVeryFaint:"#1A4060",
    orbOpacity:".18", navBg:"rgba(5,15,26,.9)",
    ringBg:"#102A40", modalOverlay:"rgba(0,0,0,.82)",
    errBg:"#FF4D4D14", errBorder:"#FF4D4D44", errText:"#FF7070",
    infoBg:"#0C1E30", infoBorder:"#1A3A5A", infoText:"#80B0D0",
    settingsBorder:"#102A40", accent:"#0EA5E9",
  },
  forest_green:{
    name:"Forest Green", emoji:"🌿",
    bg:"#050F0A", bgCard:"#081508", bgInput:"#0C1E10", bgModal:"#060F08",
    bgTab:"#0F2A14", bgHighlight:"#0C1E10",
    border:"#1A4A20", borderLight:"#102A14", borderFaint:"#0A1E0C",
    text:"#E0FFE8", textMuted:"#5A9A60", textFaint:"#3A7040", textVeryFaint:"#1A4020",
    orbOpacity:".18", navBg:"rgba(5,15,10,.9)",
    ringBg:"#102A14", modalOverlay:"rgba(0,0,0,.82)",
    errBg:"#FF4D4D14", errBorder:"#FF4D4D44", errText:"#FF7070",
    infoBg:"#0C1E10", infoBorder:"#1A4A20", infoText:"#80C090",
    settingsBorder:"#102A14", accent:"#10B981",
  },
  rose_gold:{
    name:"Rose Gold", emoji:"🌸",
    bg:"#1A0E10", bgCard:"#241218", bgInput:"#2E1820", bgModal:"#1E1014",
    bgTab:"#3A2028", bgHighlight:"#2E1820",
    border:"#5A2E38", borderLight:"#3A2028", borderFaint:"#2A1820",
    text:"#FFE8EC", textMuted:"#AA7080", textFaint:"#885060", textVeryFaint:"#5A3040",
    orbOpacity:".18", navBg:"rgba(26,14,16,.9)",
    ringBg:"#3A2028", modalOverlay:"rgba(0,0,0,.82)",
    errBg:"#FF4D4D14", errBorder:"#FF4D4D44", errText:"#FF9090",
    infoBg:"#2E1820", infoBorder:"#5A2E38", infoText:"#D090A0",
    settingsBorder:"#3A2028", accent:"#F43F5E",
  },
  sunset_orange:{
    name:"Sunset Orange", emoji:"🌅",
    bg:"#1A0E00", bgCard:"#241400", bgInput:"#2E1A00", bgModal:"#1E1000",
    bgTab:"#3A2200", bgHighlight:"#2E1A00",
    border:"#5A3A00", borderLight:"#3A2800", borderFaint:"#2A1A00",
    text:"#FFF0D0", textMuted:"#AA8040", textFaint:"#886020", textVeryFaint:"#5A4010",
    orbOpacity:".18", navBg:"rgba(26,14,0,.9)",
    ringBg:"#3A2800", modalOverlay:"rgba(0,0,0,.82)",
    errBg:"#FF4D4D14", errBorder:"#FF4D4D44", errText:"#FF9070",
    infoBg:"#2E1A00", infoBorder:"#5A3A00", infoText:"#D0A060",
    settingsBorder:"#3A2800", accent:"#F59E0B",
  },
  arctic_white:{
    name:"Arctic White", emoji:"❄️",
    bg:"#FFFFFF", bgCard:"#F8F8F8", bgInput:"#F0F0F0", bgModal:"#FAFAFA",
    bgTab:"#E8E8E8", bgHighlight:"#EEEEEE",
    border:"#CCCCCC", borderLight:"#DDDDDD", borderFaint:"#E8E8E8",
    text:"#111111", textMuted:"#666666", textFaint:"#999999", textVeryFaint:"#BBBBBB",
    orbOpacity:".06", navBg:"rgba(255,255,255,.92)",
    ringBg:"#DDDDDD", modalOverlay:"rgba(0,0,0,.5)",
    errBg:"#FF4D4D14", errBorder:"#FF4D4D44", errText:"#CC2200",
    infoBg:"#F0F0F0", infoBorder:"#CCCCCC", infoText:"#444444",
    settingsBorder:"#DDDDDD", accent:"#5A5AFF",
  },
};

function getCSS(th) {
  return `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700;1,300&family=Playfair+Display:wght@400;700&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
::-webkit-scrollbar{width:0}
body{background:${th.bg};transition:background .3s}
.orb{position:fixed;border-radius:50%;filter:blur(80px);opacity:${th.orbOpacity};pointer-events:none;animation:float 8s ease-in-out infinite}
@keyframes float{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-28px) scale(1.05)}}
@keyframes slideUp{from{transform:translateY(28px);opacity:0}to{transform:translateY(0);opacity:1}}
@keyframes tickBounce{0%{transform:scale(1)}40%{transform:scale(1.4)}100%{transform:scale(1)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes popIn{0%{transform:scale(0) rotate(-10deg);opacity:0}60%{transform:scale(1.2)}100%{transform:scale(1);opacity:1}}
@keyframes spin{to{transform:rotate(360deg)}}
.slide-up{animation:slideUp .35s ease forwards}
.fade-in{animation:fadeIn .3s ease forwards}
.pop{animation:tickBounce .5s cubic-bezier(.34,1.56,.64,1)}
.pop-in{animation:popIn .5s cubic-bezier(.34,1.56,.64,1) forwards}
.spinner{width:18px;height:18px;border:2px solid rgba(128,128,128,.3);border-top-color:${th.text};border-radius:50%;animation:spin .6s linear infinite;display:inline-block}
.field{background:${th.bgInput};border:1.5px solid ${th.border};border-radius:14px;color:${th.text};font-size:15px;font-family:'DM Sans',sans-serif;padding:13px 16px;width:100%;outline:none;transition:border-color .2s,background .3s,color .3s}
.field:focus{border-color:#5A5AFF}
.field::placeholder{color:${th.textFaint}}
.select-field{background:${th.bgInput};border:1.5px solid ${th.border};border-radius:14px;color:${th.text};font-size:14px;font-family:'DM Sans',sans-serif;padding:10px 14px;outline:none;transition:border-color .2s,background .3s;appearance:none;cursor:pointer}
.select-field:focus{border-color:#5A5AFF}
.btn-primary{background:linear-gradient(135deg,#5A5AFF,#A855F7);border:none;border-radius:14px;color:#fff;font-size:15px;font-weight:600;font-family:'DM Sans',sans-serif;padding:14px;width:100%;cursor:pointer;transition:opacity .2s,transform .15s;letter-spacing:.3px;display:flex;align-items:center;justify-content:center;gap:8px}
.btn-primary:hover{opacity:.9;transform:translateY(-1px)}
.btn-primary:active{transform:scale(.98)}
.btn-primary:disabled{opacity:.5;cursor:not-allowed;transform:none}
.btn-ghost{background:none;border:1.5px solid ${th.border};border-radius:14px;color:${th.text};font-size:15px;font-family:'DM Sans',sans-serif;padding:13px;width:100%;cursor:pointer;transition:border-color .2s,background .2s;display:flex;align-items:center;justify-content:center;gap:8px}
.btn-ghost:hover{border-color:#5A5AFF;background:${th.bgHighlight}}
.btn-link{background:none;border:none;color:#5A5AFF;font-size:13px;font-family:'DM Sans',sans-serif;cursor:pointer;padding:0;transition:opacity .2s}
.btn-link:hover{opacity:.75}
.nav-btn{background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:3px;color:${th.textMuted};font-size:11px;font-family:'DM Sans',sans-serif;transition:color .2s;padding:8px 16px}
.nav-btn.active{color:${th.text}}
.nav-btn svg{transition:transform .2s}
.nav-btn:hover svg,.nav-btn.active svg{transform:translateY(-2px)}
.habit-row{animation:slideUp .4s ease forwards;transition:background .2s,transform .15s}
.habit-row:active{transform:scale(.97)}
.check-btn{border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s cubic-bezier(.34,1.56,.64,1)}
.check-btn:hover{transform:scale(1.12)}
.tag{border-radius:8px;padding:8px 11px;cursor:pointer;font-size:20px;transition:transform .15s;border:2px solid transparent}
.tag:hover{transform:scale(1.15)}
.tag.selected{border-color:${th.text};transform:scale(1.1);box-shadow:0 0 12px rgba(128,128,128,.2)}
.ring-bg{fill:none;stroke:${th.ringBg};stroke-width:8}
.ring-fill{fill:none;stroke-width:8;stroke-linecap:round;transform:rotate(-90deg);transform-origin:50% 50%;transition:stroke-dashoffset .8s cubic-bezier(.4,0,.2,1)}
.modal-bg{position:fixed;inset:0;background:${th.modalOverlay};backdrop-filter:blur(8px);z-index:100;display:flex;align-items:flex-end;justify-content:center;animation:fadeIn .2s}
.modal{background:${th.bgModal};border-radius:28px 28px 0 0;padding:28px 24px 52px;width:100%;max-width:430px;border-top:1px solid ${th.border};animation:slideUp .3s ease;max-height:90vh;overflow-y:auto}
.pro-badge{background:linear-gradient(135deg,#FFD166,#FF8C42);color:#0A0A0F;font-size:10px;font-weight:700;padding:2px 7px;border-radius:99px;letter-spacing:.5px}
.streak-day{width:32px;height:32px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:11px;cursor:pointer;transition:all .2s;border:none;font-family:'DM Sans',sans-serif}
.del-btn{background:none;border:none;cursor:pointer;color:${th.textVeryFaint};font-size:18px;transition:color .2s,transform .15s;padding:4px 8px}
.del-btn:hover{color:#FF4D4D;transform:scale(1.2)}
.tab{background:none;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:13px;padding:8px 16px;border-radius:99px;transition:all .2s;color:${th.textMuted}}
.tab.active{background:${th.bgTab};color:${th.text};font-weight:600}
.pw-wrap{position:relative;width:100%}
.pw-wrap .field{padding-right:48px}
.pw-eye{position:absolute;right:14px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:${th.textFaint};transition:color .2s;display:flex;align-items:center;padding:4px}
.pw-eye:hover{color:${th.textMuted}}
.info-box{background:${th.infoBg};border:1px solid ${th.infoBorder};border-radius:12px;padding:12px 14px;font-size:13px;color:${th.infoText};line-height:1.6;white-space:pre-line}
.err-box{background:${th.errBg};border:1px solid ${th.errBorder};border-radius:12px;padding:11px 14px;font-size:13px;color:${th.errText};line-height:1.5}
.step-back{background:none;border:none;cursor:pointer;color:${th.textMuted};font-size:13px;font-family:'DM Sans',sans-serif;display:flex;align-items:center;gap:5px;padding:0 0 18px 0;transition:color .2s}
.step-back:hover{color:${th.text}}
.strength-bar{height:4px;border-radius:99px;transition:all .4s;margin-top:6px}
.settings-row{display:flex;align-items:center;justify-content:space-between;padding:14px 0;border-bottom:1px solid ${th.settingsBorder};gap:12px}
.settings-row:last-child{border-bottom:none}
`;
}

export default function App() {
  const [user,    setUser]    = useState(null);
  const [profile, setProfile] = useState(null);
  const [habits,  setHabits]  = useState([]);
  const [logs,    setLogs]    = useState({});
  const [loading, setLoading] = useState(true);
  const [saving,  setSaving]  = useState(false);

  const [view,    setView]    = useState("home");
  const [modal,   setModal]   = useState(null);
  const [editTarget,    setEditTarget]    = useState(null);
  const [quoteIdx,      setQuoteIdx]      = useState(0);
  const [animId,        setAnimId]        = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const [language, setLanguage] = useState(() => localStorage.getItem("pulse_lang") || "en");
  const [currency, setCurrency] = useState(() => localStorage.getItem("pulse_currency") || "USD");
  const [theme,    setTheme]    = useState(() => localStorage.getItem("pulse_theme") || "dark");

  const today = todayKey();
  const t = T[language] || T.en;
  const prices = PRICES[currency] || PRICES.USD;
  const th = theme === "light" ? LIGHT_THEME : theme === "dark" ? DARK_THEME : (PRO_THEMES[theme] || DARK_THEME);
  const CSS = getCSS(th);

  const [form, setForm] = useState({ name:"", icon:"🔥", color:COLORS[0] });

  const [authMode,    setAuthMode]    = useState("login");
  const [authStep,    setAuthStep]    = useState("form");
  const [authForm,    setAuthForm]    = useState({ name:"", email:"", password:"" });
  const [authError,   setAuthError]   = useState("");
  const [authInfo,    setAuthInfo]    = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [showPw,      setShowPw]      = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) { setUser(session.user); loadData(session.user.id); }
      else setLoading(false);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT" || !session) {
        setUser(null); setProfile(null); setHabits([]); setLogs({}); setLoading(false); setModal(null);
      } else if (session) {
        setUser(session.user); loadData(session.user.id);
      }
    });
    // Check every 30s for deleted accounts
    const sessionCheck = setInterval(async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error || !session) {
        setUser(null); setProfile(null); setHabits([]); setLogs({}); setLoading(false); setModal(null);
      }
    }, 30000);
    return () => { listener.subscription.unsubscribe(); clearInterval(sessionCheck); };
  }, []);

  useEffect(() => {
    const idx = Math.floor(Math.random() * t.quotes.length);
    setQuoteIdx(idx);
    const timer = setInterval(() => setQuoteIdx(q => (q+1) % t.quotes.length), 6000);
    return () => clearInterval(timer);
  }, [language]);

  useEffect(() => { localStorage.setItem("pulse_lang", language); }, [language]);
  useEffect(() => { localStorage.setItem("pulse_currency", currency); }, [currency]);
  useEffect(() => { localStorage.setItem("pulse_theme", theme); document.body.style.background = th.bg; }, [theme]);

  const loadData = async (userId) => {
    setLoading(true);
    try {
      const { data: habitsData } = await supabase.from("habits").select("*").eq("user_id", userId).order("created_at");
      setHabits(habitsData || []);
      const since = getLast30Keys()[0];
      const { data: logsData } = await supabase.from("habit_logs").select("*").eq("user_id", userId).gte("log_date", since);
      const logsMap = {};
      (logsData || []).forEach(l => { if (!logsMap[l.log_date]) logsMap[l.log_date] = {}; logsMap[l.log_date][l.habit_id] = l.completed; });
      setLogs(logsMap);
      const { data: subData } = await supabase.from("subscriptions").select("*").eq("user_id", userId).single();
      setProfile(subData || { plan: "free" });
    } catch (e) { console.error(e); }
    setLoading(false);
  };

  const isPro   = profile?.plan === "pro";
  const atLimit = !isPro && habits.length >= 3;

  const resetAuth = () => {
    setAuthStep("form"); setAuthError(""); setAuthInfo("");
    setShowPw(false); setAuthLoading(false);
    setAuthForm({ name:"", email:"", password:"" });
  };
  const openAuth = (mode) => { setAuthMode(mode); resetAuth(); setModal("auth"); };

  const handleSignup = async () => {
    setAuthError("");
    if (!authForm.name.trim())         return setAuthError(t.enterName);
    if (!authForm.email.includes("@")) return setAuthError(t.validEmail);
    if (authForm.password.length < 6)  return setAuthError(t.passwordLength);
    setAuthLoading(true);
    const { error } = await supabase.auth.signUp({
      email: authForm.email.trim(),
      password: authForm.password,
      options: { data: { full_name: authForm.name.trim() } }
    });
    setAuthLoading(false);
    if (error) return setAuthError(error.message);
    setAuthInfo("A verification email has been sent to:\n" + authForm.email.trim() + "\n\nClick the link in the email to verify your account, then come back and log in.");
    setAuthStep("success");
  };

  const handleLogin = async () => {
    setAuthError("");
    if (!authForm.email || !authForm.password) return setAuthError(t.fillAllFields);
    setAuthLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({ email: authForm.email.trim(), password: authForm.password });
    setAuthLoading(false);
    if (error) return setAuthError(t.incorrectPassword);
    if (!data.user) return setAuthError(t.accountDeleted);

    // Create a free subscription row if one does not exist yet
    const { data: existingSub } = await supabase
      .from("subscriptions")
      .select("id")
      .eq("user_id", data.user.id)
      .single();
    if (!existingSub) {
      await supabase.from("subscriptions").insert({
        user_id: data.user.id,
        plan: "free",
        updated_at: new Date().toISOString(),
      });
    }

    setModal(null); resetAuth();
  };

  const handleForgotRequest = async () => {
    setAuthError("");
    if (!authForm.email.includes("@")) return setAuthError(t.validEmail);
    setAuthLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(authForm.email.trim(), { redirectTo: "https://pulse-app-taupe.vercel.app" });
    setAuthLoading(false);
    if (error) return setAuthError(error.message);
    setAuthInfo("A password reset link has been sent to:\n" + authForm.email.trim() + "\n\nCheck your inbox and follow the link to set a new password.");
    setAuthStep("success");
  };

  const handleResendConfirmation = async () => {
    setAuthError(""); setAuthLoading(true);
    const { error } = await supabase.auth.resend({ type: "signup", email: authForm.email.trim() });
    setAuthLoading(false);
    if (error) return setAuthError("Could not resend. Please try signing up again.");
    setAuthInfo("A new verification email has been sent to:\n" + authForm.email.trim());
  };

  const logout = async () => { await supabase.auth.signOut(); setModal(null); setConfirmDelete(false); };

  // Force sign out if Supabase returns an auth error (e.g. deleted account)
  const forceSignOut = async (error) => {
    if (!error) return false;
    const msg = error?.message || error?.code || "";
    const isAuthError = msg.includes("JWT") || msg.includes("invalid") || msg.includes("not found") || msg.includes("No user") || error?.status === 401 || error?.status === 403;
    if (isAuthError) {
      await supabase.auth.signOut();
      setUser(null); setProfile(null); setHabits([]); setLogs({}); setModal(null);
      return true;
    }
    return false;
  };

  const deleteAccount = async () => {
    try {
      await supabase.from("habits").delete().eq("user_id", user.id);
      await supabase.from("habit_logs").delete().eq("user_id", user.id);
      await supabase.from("subscriptions").delete().eq("user_id", user.id);
      await supabase.auth.signOut();
    } catch (e) { console.error(e); }
    setConfirmDelete(false); setModal(null);
  };

  const toggleHabit = async (id) => {
    const done = !logs[today]?.[id];
    if (done) { setAnimId(id); setTimeout(() => setAnimId(null), 700); }
    setLogs(prev => ({...prev, [today]: {...(prev[today]||{}), [id]: done}}));
    if (done) {
      const { error } = await supabase.from("habit_logs").upsert({ habit_id:id, user_id:user.id, log_date:today, completed:true });
      if (error) await forceSignOut(error);
    } else {
      const { error } = await supabase.from("habit_logs").delete().match({ habit_id:id, log_date:today });
      if (error) await forceSignOut(error);
      else setLogs(prev => { const d={...prev[today]}; delete d[id]; return {...prev,[today]:d}; });
    }
  };

  const saveHabit = async () => {
    if (!form.name.trim()) return;
    setSaving(true);
    if (editTarget) {
      const { data, error } = await supabase.from("habits").update({ name:form.name, icon:form.icon, color:form.color }).eq("id", editTarget).select().single();
      if (error) { await forceSignOut(error); setSaving(false); return; }
      setHabits(prev => prev.map(h => h.id===editTarget ? data : h));
    } else {
      if (atLimit) { setModal("upgrade"); setSaving(false); return; }
      const { data, error } = await supabase.from("habits").insert({ name:form.name, icon:form.icon, color:form.color, user_id:user.id }).select().single();
      if (error) { await forceSignOut(error); setSaving(false); return; }
      setHabits(prev => [...prev, data]);
    }
    setSaving(false); setModal(null); setEditTarget(null); setForm({name:"",icon:"🔥",color:COLORS[0]});
  };

  const openEdit = (h) => { setForm({name:h.name,icon:h.icon,color:h.color}); setEditTarget(h.id); setModal("edit"); };
  const deleteHabit = async (id) => {
    setHabits(prev => prev.filter(h => h.id !== id));
    const { error } = await supabase.from("habits").delete().eq("id", id);
    if (error) await forceSignOut(error);
  };
  const toggleLogDay = async (habitId, dateKey) => {
    const done = !logs[dateKey]?.[habitId];
    setLogs(prev => { const d={...prev[dateKey]}; if(done) d[habitId]=true; else delete d[habitId]; return {...prev,[dateKey]:d}; });
    if (done) {
      const { error } = await supabase.from("habit_logs").upsert({ habit_id:habitId, user_id:user.id, log_date:dateKey, completed:true });
      if (error) await forceSignOut(error);
    } else {
      const { error } = await supabase.from("habit_logs").delete().match({ habit_id:habitId, log_date:dateKey });
      if (error) await forceSignOut(error);
    }
  };

  const completedToday = habits.filter(h => logs[today]?.[h.id]).length;
  const pct = habits.length ? Math.round((completedToday/habits.length)*100) : 0;
  const strength = pwStrength(authForm.password, t);
  const userName = user?.user_metadata?.full_name || user?.email?.split("@")[0] || "You";

  const SettingsBlock = () => (
    <div style={{background:th.bgCard,border:`1px solid ${th.border}`,borderRadius:16,padding:"4px 16px",marginBottom:14}}>
      <div className="settings-row">
        <div style={{flex:1}}>
          <div style={{fontSize:14,fontWeight:600,color:th.text}}>🌐 {t.language}</div>
          <div style={{fontSize:11,color:th.textMuted,marginTop:2}}>{t.appLanguage}</div>
        </div>
        <select className="select-field" value={language} onChange={e=>setLanguage(e.target.value)}>
          {LANGUAGES.map(l=><option key={l.code} value={l.code}>{l.label}</option>)}
        </select>
      </div>
      <div className="settings-row">
        <div style={{flex:1}}>
          <div style={{fontSize:14,fontWeight:600,color:th.text}}>💰 {t.currency}</div>
          <div style={{fontSize:11,color:th.textMuted,marginTop:2}}>{t.pricingCurrency}</div>
        </div>
        <select className="select-field" value={currency} onChange={e=>setCurrency(e.target.value)}>
          {CURRENCIES.map(c=><option key={c.code} value={c.code}>{c.code}</option>)}
        </select>
      </div>
      <div className="settings-row">
        <div style={{flex:1}}>
          <div style={{fontSize:14,fontWeight:600,color:th.text}}>{theme==="dark"?"🌙 Dark Mode":theme==="light"?"☀️ Light Mode":(PRO_THEMES[theme]?.emoji||"🎨")+" "+(PRO_THEMES[theme]?.name||"Custom")}</div>
          <div style={{fontSize:11,color:th.textMuted,marginTop:2}}>{theme==="dark"?"Switch to light mode":"Switch to dark mode"}</div>
        </div>
        <button onClick={()=>setTheme(t=>t==="dark"?"light":"dark")} style={{background:theme==="light"?"#DDD8CC":"#1E1E2A",border:`1.5px solid ${th.border}`,borderRadius:99,width:48,height:26,cursor:"pointer",position:"relative",transition:"background .3s",flexShrink:0}}>
          <div style={{position:"absolute",top:3,left:theme==="light"?23:3,width:18,height:18,borderRadius:"50%",background:theme==="light"?"#FFD166":"#5A5AFF",transition:"left .3s",boxShadow:"0 1px 4px rgba(0,0,0,.3)"}}/>
        </button>
      </div>
      {isPro&&(
        <div className="settings-row" style={{flexDirection:"column",alignItems:"flex-start",gap:10}}>
          <div>
            <div style={{fontSize:14,fontWeight:600,color:th.text}}>🎨 Pro Themes</div>
            <div style={{fontSize:11,color:th.textMuted,marginTop:2}}>Choose your colour theme</div>
          </div>
          <div style={{display:"flex",flexWrap:"wrap",gap:8,width:"100%"}}>
            {[{id:"dark",emoji:"🌑",name:"Dark"},{id:"light",emoji:"☀️",name:"Light"},...Object.entries(PRO_THEMES).map(([id,t])=>({id,emoji:t.emoji,name:t.name}))].map(({id,emoji,name})=>(
              <button key={id} onClick={()=>setTheme(id)}
                style={{background:theme===id?"linear-gradient(135deg,#5A5AFF,#A855F7)":th.bgInput,border:`1.5px solid ${theme===id?"#5A5AFF":th.border}`,borderRadius:10,padding:"6px 10px",cursor:"pointer",fontSize:11,color:theme===id?"#fff":th.text,fontFamily:"DM Sans,sans-serif",fontWeight:theme===id?700:400,display:"flex",alignItems:"center",gap:4,transition:"all .2s"}}>
                {emoji} {name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  if (loading) return (
    <div style={{minHeight:"100vh",background:th.bg,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:16}}>
      <style>{CSS}</style>
      <div style={{fontFamily:"Playfair Display,serif",fontSize:28,color:th.text}}>{t.appName}</div>
      <div className="spinner" style={{width:28,height:28}}/>
    </div>
  );

  return (
    <div style={{minHeight:"100vh",background:th.bg,fontFamily:"'DM Sans',sans-serif",color:th.text,transition:"background .3s,color .3s",display:"flex",flexDirection:"column",alignItems:"center",paddingBottom:110,position:"relative",overflow:"hidden"}}>
      <style>{CSS}</style>
      <div className="orb" style={{width:380,height:380,background:"#5A5AFF",top:-80,left:-100}}/>
      <div className="orb" style={{width:280,height:280,background:"#A855F7",top:220,right:-60,animationDelay:"3s"}}/>
      <div className="orb" style={{width:220,height:220,background:"#06D6A0",bottom:120,left:"35%",animationDelay:"5s"}}/>

      <div style={{width:"100%",maxWidth:430,padding:"0 20px",flex:1}}>
        <div style={{paddingTop:56,paddingBottom:24,display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
          <div>
            <div style={{fontSize:12,color:th.textMuted,letterSpacing:"2px",textTransform:"uppercase",marginBottom:5}}>
              {new Date().toLocaleDateString(language === "en" ? "en-US" : language, {weekday:"long",month:"long",day:"numeric"})}
            </div>
            <h1 style={{fontFamily:"Playfair Display,serif",fontSize:32,fontWeight:700,lineHeight:1.1,color:th.text}}>
              {completedToday===habits.length&&habits.length>0 ? t.perfectDay : t.appName}
            </h1>
          </div>
          <button onClick={()=>setModal("account")} style={{background:user?"linear-gradient(135deg,#5A5AFF,#A855F7)":"#1A1A26",border:user?"none":"1.5px solid #2A2A3A",borderRadius:"50%",width:42,height:42,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,color:"#F0EBE1",fontWeight:700,flexShrink:0,marginTop:4,boxShadow:user?"0 0 18px #5A5AFF55":"none",transition:"all .3s"}}>
            {user ? userName[0].toUpperCase() : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555570" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
            )}
          </button>
        </div>

        {!user && (
          <div style={{background:th.bgCard,border:`1px solid ${th.border}`,borderRadius:18,padding:"18px 20px",marginBottom:22,display:"flex",gap:14,alignItems:"center"}}>
            <span style={{fontSize:28}}>👋</span>
            <div style={{flex:1}}>
              <div style={{fontWeight:600,fontSize:15,marginBottom:3}}>{t.signInTitle}</div>
              <div style={{fontSize:12,color:th.textMuted}}>{t.signInDesc}</div>
            </div>
            <button onClick={()=>openAuth("signup")} style={{background:"linear-gradient(135deg,#5A5AFF,#A855F7)",border:"none",borderRadius:10,padding:"8px 14px",fontSize:13,fontWeight:700,color:"#fff",cursor:"pointer",whiteSpace:"nowrap"}}>{t.signUp}</button>
          </div>
        )}

        {view==="home"&&(
          <div className="slide-up">
            {habits.length>0&&(
              <div style={{display:"flex",alignItems:"center",gap:20,background:th.bgCard,borderRadius:22,padding:"18px 22px",marginBottom:24,border:`1px solid ${th.borderLight}`}}>
                <div style={{position:"relative",width:80,height:80,flexShrink:0}}>
                  <svg width="80" height="80" viewBox="0 0 80 80">
                    <circle className="ring-bg" cx="40" cy="40" r="32"/>
                    <circle className="ring-fill" cx="40" cy="40" r="32" stroke={pct===100?"#06D6A0":"#5A5AFF"} strokeDasharray={`${2*Math.PI*32}`} strokeDashoffset={`${2*Math.PI*32*(1-pct/100)}`}/>
                  </svg>
                  <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:17,fontWeight:700}}>{pct}%</div>
                </div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontWeight:600,fontSize:17,marginBottom:4}}>{completedToday} / {habits.length} {t.done}</div>
                  <div key={quoteIdx} style={{fontSize:12,color:th.textMuted,fontStyle:"italic",lineHeight:1.5,animation:"fadeIn .6s"}}>"{t.quotes[quoteIdx % t.quotes.length]}"</div>
                </div>
              </div>
            )}
            {!isPro&&habits.length>0&&(
              <div style={{background:"linear-gradient(135deg,#1A1A10,#1A1200)",border:"1px solid #FFD16633",borderRadius:16,padding:"12px 16px",marginBottom:20,display:"flex",alignItems:"center",gap:12}}>
                <span style={{fontSize:20}}>⭐</span>
                <div style={{flex:1}}>
                  <div style={{fontSize:13,fontWeight:600,color:"#FFD166"}}>{t.freePlan} — {habits.length}/3 {t.habits}</div>
                  <div style={{fontSize:11,color:"#888866"}}>{t.upgradeDesc}</div>
                </div>
                <button onClick={()=>setModal("upgrade")} style={{background:"linear-gradient(135deg,#FFD166,#FF8C42)",border:"none",borderRadius:10,padding:"7px 12px",fontSize:12,fontWeight:700,color:"#0A0A0F",cursor:"pointer"}}>{t.goPro}</button>
              </div>
            )}
            {habits.length===0?(
              <div style={{textAlign:"center",padding:"60px 0",color:"#444460"}}>
                <div style={{fontSize:48,marginBottom:14}}>✦</div>
                <div style={{fontSize:17,fontWeight:500,marginBottom:6,color:th.textMuted}}>{t.noHabits}</div>
                <div style={{fontSize:13}}>{t.noHabitsDesc}</div>
              </div>
            ):(
              <div style={{display:"flex",flexDirection:"column",gap:11}}>
                {habits.map((h,i)=>{
                  const done=!!logs[today]?.[h.id], streak=getStreak(logs,h.id), last7=getLast7(logs,h.id);
                  return (
                    <div key={h.id} className="habit-row" style={{animationDelay:`${i*55}ms`,background:done?`${h.color}18`:th.bgCard,border:`1.5px solid ${done?h.color+"55":th.borderLight}`,borderRadius:20,padding:"14px 16px",display:"flex",alignItems:"center",gap:12}}>
                      <button className={`check-btn ${animId===h.id?"pop":""}`} onClick={()=>toggleHabit(h.id)} style={{width:44,height:44,borderRadius:13,background:done?h.color:th.bgHighlight,boxShadow:done?`0 4px 18px ${h.color}55`:"none",fontSize:done?18:20,flexShrink:0}}>
                        {done?"✓":h.icon}
                      </button>
                      <div style={{flex:1,minWidth:0}}>
                        <div style={{fontWeight:600,fontSize:15,marginBottom:4,textDecoration:done?"line-through":"none",color:done?th.textMuted:th.text}}>{h.name}</div>
                        <div style={{display:"flex",gap:4,alignItems:"center"}}>
                          {last7.map((d,j)=><div key={j} style={{width:8,height:8,borderRadius:"50%",background:d?h.color:th.border,transition:"background .3s"}}/>)}
                          {streak>0&&<span style={{fontSize:11,color:h.color,marginLeft:5,fontWeight:600}}>🔥 {streak}{t.dayStreak.split(" ")[0]}</span>}
                        </div>
                      </div>
                      <div style={{display:"flex",gap:2}}>
                        <button onClick={()=>{if(!isPro){setModal("upgrade");return;}setEditTarget(h.id);setModal("streak");}} style={{background:"none",border:"none",cursor:"pointer",color:"#444460",fontSize:15,padding:"4px 6px",transition:"color .2s"}} onMouseEnter={e=>e.target.style.color="#FFD166"} onMouseLeave={e=>e.target.style.color="#444460"}>📅</button>
                        <button onClick={()=>openEdit(h)} style={{background:"none",border:"none",cursor:"pointer",color:"#444460",fontSize:15,padding:"4px 6px",transition:"color .2s"}} onMouseEnter={e=>e.target.style.color="#5A5AFF"} onMouseLeave={e=>e.target.style.color="#444460"}>✏️</button>
                        <button className="del-btn" onClick={()=>deleteHabit(h.id)}>×</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            <button onClick={()=>{if(atLimit){setModal("upgrade");}else{setForm({name:"",icon:"🔥",color:COLORS[0]});setEditTarget(null);setModal("add");}}}
              style={{marginTop:20,width:"100%",background:th.bgCard,border:`1.5px dashed ${th.border}`,borderRadius:18,padding:16,color:"#555570",fontSize:15,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:8,transition:"border-color .2s,color .2s"}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="#5A5AFF";e.currentTarget.style.color="#F0EBE1"}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="#2A2A3A";e.currentTarget.style.color="#555570"}}>
              <span style={{fontSize:20}}>+</span> {t.addHabit} {atLimit&&<span className="pro-badge">PRO</span>}
            </button>
          </div>
        )}

        {view==="stats"&&(
          <div className="slide-up">
            <h2 style={{fontFamily:"Playfair Display,serif",fontSize:26,marginBottom:22,color:th.text}}>{t.statsTitle}</h2>
            {!isPro?(
              <div style={{background:th.bgCard,border:`1px solid ${th.border}`,borderRadius:22,padding:28,textAlign:"center"}}>
                <div style={{fontSize:40,marginBottom:12}}>📊</div>
                <div style={{fontFamily:"Playfair Display,serif",fontSize:20,marginBottom:8,color:th.text}}>{t.statsProOnly}</div>
                <div style={{fontSize:13,color:"#666680",marginBottom:20,lineHeight:1.6}}>{t.statsProDesc}</div>
                <button className="btn-primary" onClick={()=>setModal("upgrade")}>{t.unlockStats}</button>
              </div>
            ):habits.length===0?(
              <div style={{textAlign:"center",padding:"60px 0",color:"#444460",fontSize:14}}>{t.addHabitsStats}</div>
            ):(
              <div style={{display:"flex",flexDirection:"column",gap:14}}>
                {habits.map(h=>{
                  const streak=getStreak(logs,h.id), total=Object.values(logs).filter(d=>d[h.id]).length;
                  const last30=getLast30Keys().map(k=>!!logs[k]?.[h.id]), rate=Math.round((last30.filter(Boolean).length/30)*100);
                  return (
                    <div key={h.id} style={{background:th.bgCard,border:`1px solid ${th.borderLight}`,borderRadius:20,padding:"20px"}}>
                      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:14}}>
                        <span style={{fontSize:22}}>{h.icon}</span>
                        <div style={{flex:1}}><div style={{fontWeight:600,fontSize:15}}>{h.name}</div><div style={{fontSize:11,color:"#666680"}}>{total} {t.totalCompletions}</div></div>
                        <div style={{textAlign:"right"}}><div style={{fontSize:22,fontWeight:700,color:h.color}}>{streak}</div><div style={{fontSize:10,color:"#666680"}}>{t.dayStreak}</div></div>
                      </div>
                      <div style={{marginBottom:10}}>
                        <div style={{fontSize:11,color:"#555570",marginBottom:7}}>{t.lastThirtyDays}</div>
                        <div style={{display:"flex",gap:3,flexWrap:"wrap"}}>{last30.map((d,i)=><div key={i} style={{width:15,height:15,borderRadius:4,background:d?h.color:th.borderLight}}/>)}</div>
                      </div>
                      <div style={{display:"flex",alignItems:"center",gap:8}}>
                        <div style={{height:5,flex:1,background:th.borderLight,borderRadius:99}}><div style={{height:"100%",width:`${rate}%`,background:`linear-gradient(90deg,${h.color},${h.color}AA)`,borderRadius:99,transition:"width .8s"}}/></div>
                        <span style={{fontSize:12,color:h.color,fontWeight:600}}>{rate}%</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>


      {/* Legal Footer */}
      <div style={{width:"100%",maxWidth:430,padding:"24px 20px 120px",textAlign:"center"}}>
        <div style={{fontSize:11,color:th.textVeryFaint,marginBottom:10}}>
          {"\u00a9 "}{new Date().getFullYear()}{" Pulse. All rights reserved."}
        </div>
        <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"6px 16px"}}>
          {[
            {label:"Privacy Policy",   href:"https://pulse-app-taupe.vercel.app/privacy"},
            {label:"Terms of Service", href:"https://pulse-app-taupe.vercel.app/terms"},
            {label:"Refund Policy",    href:"https://pulse-app-taupe.vercel.app/refunds"},
            {label:"Cookie Policy",    href:"https://pulse-app-taupe.vercel.app/cookies"},
          ].map(({label,href})=>(
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              style={{fontSize:11,color:th.textFaint,textDecoration:"none",transition:"color .2s"}}
              onMouseEnter={e=>e.target.style.color="#A0A0C8"}
              onMouseLeave={e=>e.target.style.color="#444460"}>
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Nav */}
      <div style={{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:430,background:th.navBg,backdropFilter:"blur(20px)",borderTop:`1px solid ${th.border}`,display:"flex",justifyContent:"space-around",padding:"10px 0 20px"}}>
        <button className={`nav-btn ${view==="home"?"active":""}`} onClick={()=>setView("home")}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9L12 2l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          {t.today}
        </button>
        <button className={`nav-btn ${view==="stats"?"active":""}`} onClick={()=>setView("stats")}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
          {t.stats} {!isPro&&<span className="pro-badge" style={{fontSize:8,padding:"1px 5px"}}>PRO</span>}
        </button>
      </div>

      {/* Add/Edit Habit */}
      {(modal==="add"||modal==="edit")&&(
        <div className="modal-bg" onClick={e=>{if(e.target===e.currentTarget){setModal(null);setEditTarget(null);}}}>
          <div className="modal">
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:22}}>
              <h3 style={{fontFamily:"Playfair Display,serif",fontSize:24,color:th.text}}>{modal==="edit"?t.editHabit:t.newHabit}</h3>
              <button onClick={()=>{setModal(null);setEditTarget(null);}} style={{background:"none",border:"none",color:th.textMuted,fontSize:22,cursor:"pointer"}}>×</button>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:16}}>
              <input className="field" placeholder={t.habitName} value={form.name} autoComplete="off" onChange={e=>setForm(f=>({...f,name:e.target.value}))} onKeyDown={e=>e.key==="Enter"&&saveHabit()} autoFocus/>
              <div>
                <div style={{fontSize:11,color:"#666680",letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:8}}>{t.icon}</div>
                <div style={{display:"flex",flexWrap:"wrap",gap:7}}>{ICONS.map(ic=><button key={ic} className={`tag ${form.icon===ic?"selected":""}`} style={{background:form.icon===ic?th.bgTab:th.bgInput}} onClick={()=>setForm(f=>({...f,icon:ic}))}>{ic}</button>)}</div>
              </div>
              <div>
                <div style={{fontSize:11,color:"#666680",letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:8}}>{t.color}</div>
                <div style={{display:"flex",gap:9,flexWrap:"wrap"}}>{COLORS.map(c=><button key={c} onClick={()=>setForm(f=>({...f,color:c}))} style={{width:30,height:30,borderRadius:"50%",background:c,border:"none",cursor:"pointer",outline:form.color===c?`3px solid ${c}`:"none",outlineOffset:3,transform:form.color===c?"scale(1.2)":"scale(1)",transition:"transform .15s"}}/>)}</div>
              </div>
              <button className="btn-primary" onClick={saveHabit} disabled={saving}>
                {saving&&<div className="spinner"/>}
                {modal==="edit"?t.saveChanges:`+ ${t.addHabit}`}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Streak Editor */}
      {modal==="streak"&&editTarget&&(()=>{
        const h=habits.find(x=>x.id===editTarget); if(!h) return null;
        return (
          <div className="modal-bg" onClick={e=>{if(e.target===e.currentTarget)setModal(null);}}>
            <div className="modal">
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                <div><h3 style={{fontFamily:"Playfair Display,serif",fontSize:22,color:th.text}}>{h.icon} {t.editStreak}</h3><div style={{fontSize:12,color:"#666680",marginTop:2}}>{t.tapDayToggle}</div></div>
                <button onClick={()=>setModal(null)} style={{background:"none",border:"none",color:th.textMuted,fontSize:22,cursor:"pointer"}}>×</button>
              </div>
              <div style={{marginTop:18}}>
                <div style={{fontSize:11,color:"#555570",letterSpacing:"1px",textTransform:"uppercase",marginBottom:10}}>{t.lastThirtyDays}</div>
                <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                  {getLast30Keys().map(k=>{
                    const done=!!logs[k]?.[h.id], label=new Date(k+"T12:00:00").getDate();
                    return <button key={k} className="streak-day" onClick={()=>toggleLogDay(h.id,k)} style={{background:done?h.color:th.bgHighlight,color:done?"#fff":th.textMuted,border:`1.5px solid ${done?h.color:th.border}`,fontWeight:done?700:400,boxShadow:done?`0 2px 8px ${h.color}44`:"none"}}>{label}</button>;
                  })}
                </div>
              </div>
              <div style={{marginTop:18,background:th.bgInput,borderRadius:14,padding:"12px 16px",display:"flex",justifyContent:"space-between"}}>
                {[{v:getStreak(logs,h.id),c:h.color,l:t.currentStreak},{v:Object.values(logs).filter(d=>d[h.id]).length,c:"#F0EBE1",l:t.totalDays},{v:`${Math.round((getLast30Keys().filter(k=>logs[k]?.[h.id]).length/30)*100)}%`,c:"#06D6A0",l:t.thirtyDayRate}].map(({v,c,l})=>(
                  <div key={l} style={{textAlign:"center"}}><div style={{fontSize:20,fontWeight:700,color:c}}>{v}</div><div style={{fontSize:11,color:"#666680"}}>{l}</div></div>
                ))}
              </div>
            </div>
          </div>
        );
      })()}

      {/* Upgrade */}
      {modal==="upgrade"&&(
        <div className="modal-bg" onClick={e=>{if(e.target===e.currentTarget)setModal(null);}}>
          <div className="modal">
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
              <h3 style={{fontFamily:"Playfair Display,serif",fontSize:26,color:th.text}}>{t.upgradeTitle}</h3>
              <button onClick={()=>setModal(null)} style={{background:"none",border:"none",color:th.textMuted,fontSize:22,cursor:"pointer"}}>×</button>
            </div>
            <p style={{fontSize:13,color:"#666680",marginBottom:22}}>{t.unlockPotential}</p>
            <div style={{display:"flex",flexDirection:"column",gap:12,marginBottom:24}}>
              {[[t.unlimitedHabits,t.noMoreLimits,"✦"],[t.advancedStats,t.statsDesc,"📊"],[t.streakEditing,t.fixMissedDay,"📅"],[t.reminders,t.neverBreak,"🔔"]].map(([title,sub,ic])=>(
                <div key={title} style={{display:"flex",alignItems:"center",gap:14}}><span style={{fontSize:20,width:32,textAlign:"center"}}>{ic}</span><div><div style={{fontSize:14,fontWeight:600}}>{title}</div><div style={{fontSize:12,color:"#666680"}}>{sub}</div></div></div>
              ))}
            </div>
            <div style={{display:"flex",gap:10,marginBottom:16}}>
              <div style={{flex:1,background:th.bgInput,border:`1.5px solid ${th.border}`,borderRadius:16,padding:"16px 14px",textAlign:"center"}}>
                <div style={{fontSize:11,color:"#666680",marginBottom:4}}>{t.monthly}</div>
                <div style={{fontSize:24,fontWeight:700}}>{prices.monthly}</div>
                <div style={{fontSize:11,color:"#666680"}}>{t.perMonth}</div>
              </div>
              <div style={{flex:1,background:"linear-gradient(135deg,#1A1240,#0D1A30)",border:"1.5px solid #5A5AFF",borderRadius:16,padding:"16px 14px",textAlign:"center",position:"relative"}}>
                <div style={{position:"absolute",top:-10,left:"50%",transform:"translateX(-50%)",background:"linear-gradient(135deg,#FFD166,#FF8C42)",borderRadius:99,padding:"2px 10px",fontSize:10,fontWeight:700,color:"#0A0A0F",whiteSpace:"nowrap"}}>{t.bestValue}</div>
                <div style={{fontSize:11,color:"#888AC0",marginBottom:4}}>{t.annual}</div>
                <div style={{fontSize:24,fontWeight:700,color:"#A0A0FF"}}>{prices.annual}</div>
                <div style={{fontSize:11,color:"#888AC0"}}>{t.perYear}</div>
              </div>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              <button className="btn-primary" onClick={()=>{
                if(!user){setModal("auth");return;}
                window.open("https://buy.stripe.com/9B6eVd8eUdb3cazcbU4Ni00","_blank");
              }}>
                {user ? t.upgradeNow + " ✦ (Monthly)" : t.signUpGoPro}
              </button>
              <button className="btn-primary" onClick={()=>{
                if(!user){setModal("auth");return;}
                window.open("https://buy.stripe.com/cNi14n7aQc6Z8Ynek24Ni02","_blank");
              }} style={{background:"linear-gradient(135deg,#FFD166,#FF8C42)",color:"#0A0A0F"}}>
                {user ? t.upgradeNow + " ✦ (Annual — Best Value)" : t.signUpGoPro}
              </button>
            </div>
            <div style={{textAlign:"center",marginTop:10,fontSize:11,color:"#444460"}}>{t.cancelAnytime}</div>
          </div>
        </div>
      )}

      {/* Account */}
      {modal==="account"&&(
        <div className="modal-bg" onClick={e=>{if(e.target===e.currentTarget){setModal(null);setConfirmDelete(false);}}}>
          <div className="modal">
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
              <h3 style={{fontFamily:"Playfair Display,serif",fontSize:24,color:th.text}}>{t.account}</h3>
              <button onClick={()=>{setModal(null);setConfirmDelete(false);}} style={{background:"none",border:"none",color:th.textMuted,fontSize:22,cursor:"pointer"}}>×</button>
            </div>
            {user?(
              <div>
                <div style={{display:"flex",alignItems:"center",gap:16,background:th.bgInput,borderRadius:18,padding:"18px 20px",marginBottom:14}}>
                  <div style={{width:52,height:52,borderRadius:"50%",background:"linear-gradient(135deg,#5A5AFF,#A855F7)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,fontWeight:700,flexShrink:0,boxShadow:"0 0 18px #5A5AFF55"}}>
                    {userName[0].toUpperCase()}
                  </div>
                  <div>
                    <div style={{fontWeight:600,fontSize:16,color:th.text}}>{userName}</div>
                    <div style={{fontSize:12,color:"#666680"}}>{user.email}</div>
                    <div style={{marginTop:5,display:"flex",gap:6,flexWrap:"wrap"}}>
                      {isPro?<span style={{background:"linear-gradient(135deg,#FFD166,#FF8C42)",color:"#0A0A0F",fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:99}}>✦ PRO</span>:<span style={{background:"#1E1E2A",color:"#888898",fontSize:11,padding:"2px 8px",borderRadius:99}}>{t.freePlanBadge}</span>}
                      {user.email_confirmed_at&&<span style={{background:"#06D6A018",color:"#06D6A0",fontSize:11,padding:"2px 8px",borderRadius:99,border:"1px solid #06D6A033"}}>✓ {t.verified}</span>}
                    </div>
                  </div>
                </div>
                <SettingsBlock/>
                <div style={{display:"flex",flexDirection:"column",gap:10}}>
                  {!isPro&&<button className="btn-primary" onClick={()=>setModal("upgrade")}>{t.upgradePro} ✦</button>}
                  {isPro&&<div style={{background:th.bgInput,borderRadius:14,padding:"14px 16px",fontSize:13,color:th.textMuted,textAlign:"center"}}>✦ {t.proActive}</div>}
                  <button className="btn-ghost" onClick={logout}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                    {t.signOut}
                  </button>
                  {!confirmDelete?(
                    <button onClick={()=>setConfirmDelete(true)} style={{background:"none",border:"none",color:"#555570",fontSize:13,cursor:"pointer",padding:"8px 0",transition:"color .2s"}}
                      onMouseEnter={e=>e.target.style.color="#FF4D4D"} onMouseLeave={e=>e.target.style.color="#555570"}>
                      {t.deleteAccount}
                    </button>
                  ):(
                    <div style={{background:th.bg,border:"1.5px solid #FF4D4D44",borderRadius:16,padding:"16px 18px"}}>
                      <div style={{fontSize:14,fontWeight:600,color:"#FF4D4D",marginBottom:6}}>{t.deleteConfirmTitle}</div>
                      <div style={{fontSize:12,color:"#888880",lineHeight:1.5,marginBottom:14}}>{t.deleteConfirmDesc}</div>
                      <div style={{display:"flex",gap:8}}>
                        <button onClick={()=>setConfirmDelete(false)} style={{flex:1,background:th.bgTab,border:"none",borderRadius:10,color:th.text,fontSize:13,fontWeight:600,padding:"10px",cursor:"pointer"}}>{t.cancel}</button>
                        <button onClick={deleteAccount} style={{flex:1,background:"#FF4D4D",border:"none",borderRadius:10,color:"#fff",fontSize:13,fontWeight:700,padding:"10px",cursor:"pointer"}}>{t.delete}</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ):(
              <div>
                <div style={{textAlign:"center",marginBottom:16,color:th.text}}>
                  <div style={{fontSize:40,marginBottom:10}}>👤</div>
                  <div style={{fontSize:16,fontWeight:500,marginBottom:6}}>{t.notSignedIn}</div>
                  <div style={{fontSize:13,color:"#666680",lineHeight:1.5}}>{t.notSignedInDesc}</div>
                </div>
                <SettingsBlock/>
                <div style={{display:"flex",flexDirection:"column",gap:10}}>
                  <button className="btn-primary" onClick={()=>openAuth("signup")}>{t.createAccount}</button>
                  <button className="btn-ghost" onClick={()=>openAuth("login")}>{t.logIn}</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Auth */}
      {modal==="auth"&&(
        <div className="modal-bg" onClick={e=>{if(e.target===e.currentTarget){setModal(null);resetAuth();}}}>
          <div className="modal">

            {authStep==="form"&&(<>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
                <h3 style={{fontFamily:"Playfair Display,serif",fontSize:24,color:th.text}}>{authMode==="signup"?t.createAccount:t.welcomeBack}</h3>
                <button onClick={()=>{setModal(null);resetAuth();}} style={{background:"none",border:"none",color:th.textMuted,fontSize:22,cursor:"pointer"}}>×</button>
              </div>
              <div style={{display:"flex",background:th.bgInput,borderRadius:12,padding:4,marginBottom:22}}>
                {["signup","login"].map(m=>(
                  <button key={m} className={`tab ${authMode===m?"active":""}`} style={{flex:1}} onClick={()=>{setAuthMode(m);setAuthError("");}}>
                    {m==="signup"?t.signUp:t.logIn}
                  </button>
                ))}
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:12}}>
                {authMode==="signup"&&<input className="field" placeholder={t.yourName} autoComplete="off" value={authForm.name} onChange={e=>setAuthForm(f=>({...f,name:e.target.value}))} autoFocus/>}
                <input className="field" placeholder={t.emailAddress} type="email" autoComplete="off" value={authForm.email} onChange={e=>setAuthForm(f=>({...f,email:e.target.value}))}/>
                <div>
                  <div className="pw-wrap">
                    <input className="field" placeholder={t.password} type={showPw?"text":"password"} autoComplete="new-password" value={authForm.password} onChange={e=>setAuthForm(f=>({...f,password:e.target.value}))} onKeyDown={e=>e.key==="Enter"&&(authMode==="signup"?handleSignup():handleLogin())}/>
                    <button className="pw-eye" onClick={()=>setShowPw(v=>!v)} type="button"><EyeIcon open={showPw}/></button>
                  </div>
                  {authMode==="signup"&&authForm.password&&(
                    <div style={{marginTop:8}}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}><span style={{fontSize:11,color:"#555570"}}>{t.passwordStrength}</span><span style={{fontSize:11,color:strength.color,fontWeight:600}}>{strength.label}</span></div>
                      <div style={{height:4,background:"#1E1E2A",borderRadius:99}}><div className="strength-bar" style={{width:strength.width,background:strength.color}}/></div>
                    </div>
                  )}
                </div>
                {authMode==="login"&&(
                  <div style={{textAlign:"right",marginTop:-4}}>
                    <button className="btn-link" onClick={()=>{setAuthError("");setAuthStep("forgot");}}>{t.forgotPassword}</button>
                  </div>
                )}
                {authError&&<div className="err-box">{authError}</div>}
                <button className="btn-primary" onClick={authMode==="signup"?handleSignup:handleLogin} disabled={authLoading} style={{marginTop:4}}>
                  {authLoading&&<div className="spinner"/>}
                  {authMode==="signup"?t.createAccount:t.logIn}
                </button>
                <div style={{textAlign:"center",fontSize:12,color:"#444460"}}>
                  {authMode==="signup"?t.alreadyHaveAccount+" ":t.noAccount+" "}
                  <button className="btn-link" onClick={()=>{setAuthMode(m=>m==="signup"?"login":"signup");setAuthError("");}}>
                    {authMode==="signup"?t.logIn:t.signUp}
                  </button>
                </div>
              </div>
            </>)}

            {authStep==="forgot"&&(<>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                <h3 style={{fontFamily:"Playfair Display,serif",fontSize:24,color:th.text}}>{t.resetPassword}</h3>
                <button onClick={()=>{setModal(null);resetAuth();}} style={{background:"none",border:"none",color:th.textMuted,fontSize:22,cursor:"pointer"}}>×</button>
              </div>
              <button className="step-back" onClick={()=>setAuthStep("form")}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                {t.backToLoginLink}
              </button>
              <div style={{fontSize:13,color:"#888899",lineHeight:1.6,marginBottom:20}}>{t.enterEmailReset}</div>
              <div style={{display:"flex",flexDirection:"column",gap:12}}>
                <input className="field" placeholder={t.emailAddress} type="email" autoComplete="off" value={authForm.email} onChange={e=>setAuthForm(f=>({...f,email:e.target.value}))} onKeyDown={e=>e.key==="Enter"&&handleForgotRequest()} autoFocus/>
                {authError&&<div className="err-box">{authError}</div>}
                <button className="btn-primary" onClick={handleForgotRequest} disabled={authLoading}>
                  {authLoading&&<div className="spinner"/>}
                  {t.sendResetLink}
                </button>
              </div>
            </>)}

            {authStep==="success"&&(
              <div style={{textAlign:"center",padding:"16px 0 8px"}}>
                <div className="pop-in" style={{fontSize:60,marginBottom:16,display:"inline-block"}}>
                  {authMode==="signup"?"🎉":"✅"}
                </div>
                <h3 style={{fontFamily:"Playfair Display,serif",fontSize:26,marginBottom:10}}>
                  {authMode==="signup"?t.checkEmail:t.emailSent}
                </h3>
                <div style={{fontSize:13,color:"#888899",lineHeight:1.7,marginBottom:20,whiteSpace:"pre-line"}}>{authInfo}</div>
                {authMode==="signup"&&(
                  <div style={{marginBottom:20}}>
                    <div style={{fontSize:12,color:"#444460",marginBottom:8}}>{t.didntReceive}</div>
                    <button className="btn-ghost" onClick={handleResendConfirmation} disabled={authLoading} style={{fontSize:13,padding:"10px"}}>
                      {authLoading&&<div className="spinner"/>}
                      {t.resendEmail}
                    </button>
                    {authError&&<div className="err-box" style={{marginTop:10,textAlign:"left"}}>{authError}</div>}
                  </div>
                )}
                <button className="btn-primary" onClick={()=>{setModal("auth");setAuthMode("login");setAuthStep("form");setAuthInfo("");setAuthError("");}}>
                  {authMode==="signup"?t.goToLogin:t.backToLogin}
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
