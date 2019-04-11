OC.L10N.register(
    "suspicious_login",
    {
    "Suspicious Login" : "Accesso sospettoso",
    "New login detected" : "Rilevato un nuovo login",
    "A new login into your account was detected. The IP address %s was classified as suspicious. If this was you, you can ignore this message. Otherwise you should change your password." : "È stato rilevato un nuovo accesso al tuo account. L'indirizzo IP 1 %s è stato classificato come sospettoso. Se sei stato tu, puoi ignorare questo messaggio. Altrimenti si consiglia di cambiare la password.",
    "Detect and warn about suspicious IPs logging into Nextcloud\n\t" : "Rileva e avvisa gli IP sospetti che accedono a Nextcloud\n\t",
    "Suspicious login detection" : "Rilevamento di login sospetti",
    "The suspicious login app is enabled on this instance. It will keep track of IP addresses users successfully log in from and build a classifier that warns if a new login comes from a suspicious IP address." : "L'applicazione di login sospetta è abilitata in questa istanza. Tiene traccia degli indirizzi IP da cui gli utenti accedono con successo e crea un classificatore che avvisa se un nuovo login proviene da un indirizzo IP sospetto.",
    "Training data statistics" : "Statistica dei dati sulla formazione",
    "So far the app has captured {total} logins (including client connections), of which {distinct} are distinct (IP, UID) tuples." : "Finora l'applicazione ha catturato {totale} login (incluse le connessioni client), di cui {distinto} sono distinte (IP, UID) tuple.",
    "Classifier model statistics" : "Statistiche del modello di classificazione",
    "No classifier model has been trained yet. This most likely means that you just enabled the app recently. Because the training of a model requires good data, the app waits until logins of at least {days} days have been captured." : "Nessun modello di classificazione è ancora stato addestrato. Questo probabilmente significa che avete appena abilitato l'applicazione di recente. Poiché l'addestramento di un modello richiede buoni dati, l'app attende fino a quando non sono stati catturati i login di almeno {giorni} giorni.",
    "During evaluation, the latest model (trained {time}) has shown to capture {recall}% of all suspicious logins (recall), whereas {precision}% of the logins classified as suspicious are indeed suspicious (precision). Below you see a visualization of historic model performance." : "Durante la valutazione, l'ultimo modello (addestrato {tempo}) ha dimostrato di catturare {recall}% di tutti i login sospetti (richiami), mentre {precisione}% dei login classificati come sospetti sono effettivamente sospetti (precisione). Di seguito viene visualizzata una visualizzazione delle prestazioni storiche del modello.",
    "Precision" : "Precisione",
    "Recall" : "Richiamo"
},
"nplurals=2; plural=(n != 1);");