# Avatar umani di Porto Nero

I dodici avatar `.glb` e le loro anteprime WebP vengono creati con
`tools/genera-avatar-reali.py`; non sono asset scaricati da un marketplace né
personaggi di un gioco commerciale.

- Base anatomica, abiti e scarpe: MakeHuman Community / MPFB, asset
  **CC0 1.0** (System Assets, Pants 01, Shirts 01 e Suits 01).
- Skin naturali e dettagli anatomici di naso, guance, orecchie, braccia e
  mani: MakeHuman Community, pacchetti **Skins 01/02**, **Nose 01**,
  **Cheek 01**, **Ears 01**, **Arms 01** e **Hands 01**, tutti **CC0 1.0**.
- Capelli `elvs_braided_rows`, `elvs_wavy_bob`, `elvs_braid_bun` e
  `elvs_daisy_hair`: **Elvaerwyn**, **CC-BY**; impiegati per le varianti
  donna e per una pattuglia.

Fonti e licenze: <https://static.makehumancommunity.org/assets/assetpacks.html>
e <https://static.makehumancommunity.org/about/license.html>. I file GLB sono
mesh bakeate dalle stesse persone renderizzate nelle anteprime.

Il ciclo di camminata deriva da un'animazione scaricata tramite Adobe Mixamo e
viene convertito da `tools/importa-mixamo.py` in otto morph target. Gli FBX
originali e lo scheletro Mixamo non vengono distribuiti: nel gioco restano solo
i vertici bakeati del personaggio, interpolati continuamente dal motore. Fonte:
<https://www.mixamo.com/>; condizioni Adobe Mixamo per l'uso nei videogiochi:
<https://helpx.adobe.com/creative-cloud/faq/mixamo-faq.html>.

I modelli derivati sono usati come personaggi di un videogioco e possono essere
inclusi nella build pubblica con questa attribuzione.
