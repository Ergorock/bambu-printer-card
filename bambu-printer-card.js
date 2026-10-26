/**
 * Bambu Printer Card
 * Carte Lovelace regroupant toutes les informations d'une imprimante Bambu Lab
 * (intégration HACS "bambu_lab") : caméra, impression en cours, températures,
 * ventilateurs, AMS / bobine externe, erreurs HMS et commandes.
 *
 * Les entités sont retrouvées automatiquement à partir de l'appareil choisi
 * (via leur unique_id), quelle que soit la langue des entity_id.
 *
 * Exemple :
 *   type: custom:bambu-printer-card
 *   device: 6a563c3a56e7cb6aecd12f463f278011   # appareil de l'imprimante
 *   title: Imprimante 3D          # optionnel (défaut : nom de l'imprimante)
 *   show_camera: true             # caméra / image de couverture
 *   show_controls: true           # pause, reprise, arrêt, vitesse, lumière
 *   show_temperatures: true
 *   show_fans: true
 *   show_ams: true
 *   show_details: true            # buse, plateau, utilisation, réseau…
 *   power_switch: switch.prise    # prise connectée de l'imprimante (optionnel)
 *   power_sensor: sensor.puissance  # puissance instantanée en W (optionnel)
 *   energy_sensor: sensor.energie   # énergie consommée en kWh (optionnel)
 *
 * La mise en page s'adapte à la largeur de la carte : une colonne sur
 * téléphone, deux ou trois colonnes quand la carte est large.
 *
 *   entities:                    # surcharges facultatives, clé -> entity_id
 *     sensor.nozzle_temp: sensor.ma_buse
 */

const CARD_VERSION = "1.1.0";
const PLATFORM = "bambu_lab";

const STRINGS = {
  en: {
    card_description: "Everything about a Bambu Lab printer: camera, print job, temperatures, AMS, errors and controls.",
    smart_plug: "Smart plug",
    label_device: "Printer",
    label_title: "Title (default: printer name)",
    label_show_camera: "Camera",
    label_show_controls: "Controls",
    label_show_temperatures: "Temperatures",
    label_show_fans: "Fans",
    label_show_ams: "AMS / spools",
    label_show_details: "Details",
    label_power_switch: "Printer plug",
    label_power_sensor: "Power (W)",
    label_energy_sensor: "Energy used (kWh)",
    no_device: "Choose the printer (“device” option)",
    printer: "Printer",
    powered_off: "Off",
    offline: "Offline",
    power: "Power",
    light: "Light",
    force_refresh: "Force refresh",
    turn_off_plug: "Turn off the plug",
    confirm_off_printing: "Printing! Turn off?",
    confirm_off: "Turn off?",
    show_model: "Show the model",
    show_camera: "Show the camera",
    hms_error: "Active HMS error",
    print_error: "Print error",
    bambu_wiki: "Bambu wiki",
    printer_off: "The printer is off.",
    turn_on: "Turn on",
    printer_offline: "The printer is offline.",
    no_print: "No print in progress.",
    print: "Print",
    progress: "Progress",
    layers: "Layers",
    remaining: "Remaining",
    estimated_end: "Estimated end",
    filament: "Filament",
    length: "Length",
    pause: "Pause",
    resume: "Resume",
    confirm_stop: "Confirm stop?",
    stop: "Stop",
    speed_silent: "Silent",
    speed_standard: "Standard",
    speed_sport: "Sport",
    speed_ludicrous: "Ludicrous",
    nozzle: "Nozzle",
    bed: "Bed",
    chamber: "Chamber",
    temperatures: "Temperatures",
    edit_target: "Change the target",
    target: " · target {t} °C",
    fans: "Fans",
    fan_cooling_fan: "Part",
    fan_aux_fan: "Auxiliary",
    fan_chamber_fan: "Chamber",
    fan_heatbreak_fan: "Heatbreak",
    humidity_index: "Humidity index",
    humidity: "Humidity",
    temperature: "Temperature",
    unavailable: "unavailable",
    external_spool: "External spool",
    filaments: "Filaments",
    remaining_pct: "{n} % left",
    empty: "Empty",
    profile: "Profile",
    type: "Type",
    usage: "Usage",
    timelapse: "Timelapse",
    on: "On",
    off: "Off",
    connection: "Connection",
    plug: "Plug",
    energy: "Energy",
    details: "Details",
    firmware_update: "Firmware update available",
    days_hours: "{d} d {h} h",
    tomorrow: "tomorrow {time}",
    refresh_requested: "Refresh requested",
    stop_requested: "Print stop requested",
    plug_off: "Plug turned off",
    plug_on: "Plug turned on",
    failed: "Failed: {error}",
  },
  fr: {
    card_description: "Toutes les informations d'une imprimante Bambu Lab : caméra, impression, températures, AMS, erreurs et commandes.",
    smart_plug: "Prise connectée",
    label_device: "Imprimante",
    label_title: "Titre (défaut : nom de l'imprimante)",
    label_show_camera: "Caméra",
    label_show_controls: "Commandes",
    label_show_temperatures: "Températures",
    label_show_fans: "Ventilateurs",
    label_show_ams: "AMS / bobines",
    label_show_details: "Détails",
    label_power_switch: "Prise de l'imprimante",
    label_power_sensor: "Puissance (W)",
    label_energy_sensor: "Énergie consommée (kWh)",
    no_device: "Choisissez l'imprimante (option « device »)",
    printer: "Imprimante",
    powered_off: "Éteinte",
    offline: "Hors ligne",
    power: "Puissance",
    light: "Lumière",
    force_refresh: "Forcer l'actualisation",
    turn_off_plug: "Éteindre la prise",
    confirm_off_printing: "Impression en cours ! Éteindre ?",
    confirm_off: "Éteindre ?",
    show_model: "Voir le modèle",
    show_camera: "Voir la caméra",
    hms_error: "Erreur HMS active",
    print_error: "Erreur d'impression",
    bambu_wiki: "Wiki Bambu",
    printer_off: "L'imprimante est éteinte.",
    turn_on: "Allumer",
    printer_offline: "L'imprimante est hors ligne.",
    no_print: "Aucune impression en cours.",
    print: "Impression",
    progress: "Progression",
    layers: "Couches",
    remaining: "Restant",
    estimated_end: "Fin estimée",
    filament: "Filament",
    length: "Longueur",
    pause: "Pause",
    resume: "Reprendre",
    confirm_stop: "Confirmer l'arrêt ?",
    stop: "Arrêter",
    speed_silent: "Silencieux",
    speed_standard: "Standard",
    speed_sport: "Sport",
    speed_ludicrous: "Démentiel",
    nozzle: "Buse",
    bed: "Plateau",
    chamber: "Chambre",
    temperatures: "Températures",
    edit_target: "Modifier la consigne",
    target: " · cible {t} °C",
    fans: "Ventilateurs",
    fan_cooling_fan: "Pièce",
    fan_aux_fan: "Auxiliaire",
    fan_chamber_fan: "Chambre",
    fan_heatbreak_fan: "Isolateur",
    humidity_index: "Indice d'humidité",
    humidity: "Humidité",
    temperature: "Température",
    unavailable: "indisponible",
    external_spool: "Bobine externe",
    filaments: "Filaments",
    remaining_pct: "{n} % restant",
    empty: "Vide",
    profile: "Profil",
    type: "Type",
    usage: "Utilisation",
    timelapse: "Timelapse",
    on: "Activé",
    off: "Désactivé",
    connection: "Connexion",
    plug: "Prise",
    energy: "Énergie",
    details: "Détails",
    firmware_update: "Mise à jour du micrologiciel disponible",
    days_hours: "{d} j {h} h",
    tomorrow: "demain {time}",
    refresh_requested: "Actualisation demandée",
    stop_requested: "Arrêt de l'impression demandé",
    plug_off: "Prise éteinte",
    plug_on: "Prise allumée",
    failed: "Échec : {error}",
  },
};

// Langue de l'interface : celle de Home Assistant (français ou anglais, anglais par défaut)
let lang = (navigator.language || "").startsWith("fr") ? "fr" : "en";
const setLang = (hass) => {
  const l = hass?.locale?.language || hass?.language;
  if (l) lang = l.startsWith("fr") ? "fr" : "en";
};
const t = (key, vars = {}) =>
  (STRINGS[lang][key] ?? STRINGS.en[key] ?? key).replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? "");

const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const BAD = ["unavailable", "unknown", "", undefined, null];

const STATUS = {
  running: { color: "var(--success-color, #43a047)", icon: "mdi:printer-3d-nozzle" },
  prepare: { color: "var(--info-color, #039be5)", icon: "mdi:progress-clock" },
  slicing: { color: "var(--info-color, #039be5)", icon: "mdi:layers-triple" },
  init: { color: "var(--info-color, #039be5)", icon: "mdi:progress-clock" },
  pause: { color: "var(--warning-color, #ffa000)", icon: "mdi:pause-circle" },
  failed: { color: "var(--error-color, #db4437)", icon: "mdi:alert-circle" },
  finish: { color: "var(--success-color, #43a047)", icon: "mdi:check-circle" },
  idle: { color: "var(--secondary-text-color)", icon: "mdi:sleep" },
  offline: { color: "var(--disabled-text-color, #9e9e9e)", icon: "mdi:printer-3d-off" },
  powered_off: { color: "var(--disabled-text-color, #9e9e9e)", icon: "mdi:power-plug-off" },
};

const ACTIVE = ["running", "pause", "prepare", "slicing", "init"];

const SPEEDS = [
  { value: "silent", icon: "mdi:tortoise" },
  { value: "standard", icon: "mdi:walk" },
  { value: "sport", icon: "mdi:run" },
  { value: "ludicrous", icon: "mdi:rocket-launch" },
];

const FANS = [
  { key: "cooling_fan", icon: "mdi:fan" },
  { key: "aux_fan", icon: "mdi:fan-chevron-up" },
  { key: "chamber_fan", icon: "mdi:fan-chevron-down" },
  { key: "heatbreak_fan", icon: "mdi:fan-alert" },
];

class BambuPrinterCard extends HTMLElement {
  static getConfigForm() {
    return {
      schema: [
        { name: "device", required: true, selector: { device: { integration: PLATFORM } } },
        { name: "title", selector: { text: {} } },
        {
          type: "expandable",
          name: "",
          title: t("smart_plug"),
          icon: "mdi:power-socket-eu",
          schema: [
            { name: "power_switch", selector: { entity: { domain: ["switch", "input_boolean"] } } },
            { name: "power_sensor", selector: { entity: { domain: "sensor", device_class: "power" } } },
            { name: "energy_sensor", selector: { entity: { domain: "sensor", device_class: "energy" } } },
          ],
        },
        {
          type: "grid",
          name: "",
          schema: [
            { name: "show_camera", selector: { boolean: {} } },
            { name: "show_controls", selector: { boolean: {} } },
            { name: "show_temperatures", selector: { boolean: {} } },
            { name: "show_fans", selector: { boolean: {} } },
            { name: "show_ams", selector: { boolean: {} } },
            { name: "show_details", selector: { boolean: {} } },
          ],
        },
      ],
      computeLabel: (s) => t(`label_${s.name}`),
    };
  }

  static getStubConfig(hass) {
    setLang(hass);
    const printer = Object.values(hass.devices || {}).find(
      (d) => d.manufacturer === "Bambu Lab" && !d.via_device_id
    );
    return { device: printer?.id };
  }

  setConfig(config) {
    if (!config.device) throw new Error(t("no_device"));
    this._config = {
      show_camera: true,
      show_controls: true,
      show_temperatures: true,
      show_fans: true,
      show_ams: true,
      show_details: true,
      ...config,
    };
    this._map = null;
    this._lastKey = null;
    if (this._hass) this._discover();
  }

  set hass(hass) {
    const first = !this._hass;
    this._hass = hass;
    setLang(hass);
    if (first || !this._map) return this._discover();
    this._update();
  }

  getCardSize() {
    return 10;
  }

  getGridOptions() {
    return { columns: "full", min_columns: 6 };
  }

  connectedCallback() {
    this._timer = setInterval(() => this._update(true), 30000); // rafraîchit l'heure de fin estimée
  }

  disconnectedCallback() {
    clearInterval(this._timer);
  }

  /* ---------- Découverte des entités ---------- */

  async _discover() {
    if (this._discovering) return;
    this._discovering = true;
    const hass = this._hass;
    const printerId = this._config.device;
    const devices = Object.values(hass.devices || {});
    const children = devices.filter((d) => d.via_device_id === printerId);
    const deviceIds = new Set([printerId, ...children.map((d) => d.id)]);

    // unique_id -> clé stable (ex : "01P09B…_nozzle_temp" -> "nozzle_temp")
    let entries = [];
    try {
      const list = await hass.callWS({ type: "config/entity_registry/list" });
      entries = list
        .filter((e) => deviceIds.has(e.device_id) && !e.disabled_by)
        .map((e) => ({ ...e, key: this._keyFromUniqueId(e.unique_id) }));
    } catch (err) {
      // Utilisateur non administrateur : repli sur les translation_key du registre frontend
      entries = Object.values(hass.entities || {})
        .filter((e) => deviceIds.has(e.device_id))
        .map((e) => ({ ...e, key: e.translation_key || e.entity_id.split(".")[1] }));
    }

    const map = { printer: {}, ams: [], external: null };
    for (const e of entries) {
      const domain = e.entity_id.split(".")[0];
      if (e.device_id === printerId) {
        map.printer[`${domain}.${e.key}`] = e.entity_id;
      }
    }

    for (const dev of children) {
      const own = entries.filter((e) => e.device_id === dev.id);
      if ((dev.model || "").toLowerCase().includes("external")) {
        map.external = own.find((e) => e.entity_id.startsWith("sensor."))?.entity_id || null;
        continue;
      }
      const ams = { id: dev.id, name: dev.name_by_user || dev.name, model: dev.model, trays: [], sensors: {} };
      for (const e of own) {
        const m = /^tray_(\d+)$/.exec(e.key);
        if (m) ams.trays[Number(m[1]) - 1] = e.entity_id;
        else ams.sensors[`${e.entity_id.split(".")[0]}.${e.key}`] = e.entity_id;
      }
      ams.trays = ams.trays.filter(Boolean);
      map.ams.push(ams);
    }
    map.ams.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));

    Object.assign(map.printer, this._config.entities || {});
    this._map = map;
    this._discovering = false;
    this._render();
  }

  _keyFromUniqueId(uid = "") {
    const ams = /_AMS_[^_]+_(.+)$/.exec(uid);
    if (ams) return ams[1];
    if (/_external_spool$/i.test(uid)) return "external_spool";
    const i = uid.indexOf("_");
    return i >= 0 ? uid.slice(i + 1) : uid;
  }

  /* ---------- Accès aux états ---------- */

  _eid(key) {
    return this._map?.printer[key];
  }

  _st(key) {
    if (!key) return undefined;
    const eid = key.includes(".") && this._hass.states[key] ? key : this._eid(key);
    return eid ? this._hass.states[eid] : undefined;
  }

  _val(key) {
    const s = this._st(key);
    return s && !BAD.includes(s.state) ? s.state : null;
  }

  _num(key) {
    const v = parseFloat(this._val(key));
    return Number.isFinite(v) ? v : null;
  }

  _fmt(key) {
    const s = this._st(key);
    if (!s || BAD.includes(s.state)) return null;
    try {
      return this._hass.formatEntityState ? this._hass.formatEntityState(s) : s.state;
    } catch (e) {
      return s.state;
    }
  }

  _allEntityIds() {
    const m = this._map;
    return [
      ...Object.values(m.printer),
      ...m.ams.flatMap((a) => [...a.trays, ...Object.values(a.sensors)]),
      m.external,
      this._config.power_switch,
      this._config.power_sensor,
      this._config.energy_sensor,
    ].filter(Boolean);
  }

  /* ---------- Rendu ---------- */

  _render() {
    if (!this._config || !this._hass || !this._map) return;
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.addEventListener("click", (ev) => this._onClick(ev));
    }
    this.shadowRoot.innerHTML = `
      <style>${STYLES}</style>
      <ha-card>
        <div id="header"></div>
        <div id="alerts"></div>
        <div class="layout">
          <div class="col col-main">
            ${this._config.show_camera ? `<div class="media" id="media"><img id="media-img" alt="" /><div class="media-overlay" id="media-overlay"></div></div>` : ""}
            <div id="main"></div>
          </div>
          <div class="col col-side" id="side"></div>
          <div class="col col-ams" id="ams"></div>
          <div class="col col-details" id="details"></div>
        </div>
      </ha-card>`;
    this._lastKey = null;
    this._update();
  }

  _update(force = false) {
    if (!this.shadowRoot || !this._map) return;
    const states = this._hass.states;
    const key = this._allEntityIds()
      .map((e) => {
        const s = states[e];
        return s ? `${s.state}|${s.last_updated}` : "";
      })
      .join(";");
    if (!force && key === this._lastKey) return;
    this._lastKey = key;

    this.shadowRoot.querySelector("#header").innerHTML = this._headerHtml();
    if (this._config.show_camera) this._updateMedia();
    const root = this.shadowRoot;
    root.querySelector("#alerts").innerHTML = this._errorsHtml();
    root.querySelector("#main").innerHTML = [this._jobHtml(), this._config.show_controls ? this._controlsHtml() : ""].join("");
    const cols = {
      side: [this._config.show_temperatures ? this._tempsHtml() : "", this._config.show_fans ? this._fansHtml() : ""].join(""),
      ams: this._config.show_ams ? this._amsHtml() : "",
      details: this._config.show_details ? this._detailsHtml() : "",
    };
    for (const [id, html] of Object.entries(cols)) {
      const el = root.querySelector(`#${id}`);
      el.innerHTML = html;
      el.hidden = !html.trim();
    }
  }

  _powerState() {
    const s = this._config.power_switch && this._hass.states[this._config.power_switch];
    return s ? s.state : null;
  }

  _status() {
    if (this._powerState() === "off") return "powered_off";
    const status = this._val("sensor.print_status") || "offline";
    const online = this._val("binary_sensor.online");
    return online === "off" ? "offline" : status;
  }

  _offline() {
    return ["offline", "powered_off"].includes(this._status());
  }

  _headerHtml() {
    const dev = this._hass.devices?.[this._config.device];
    const name = this._config.title || this._val("sensor.name") || dev?.name_by_user || dev?.name || t("printer");
    const status = this._status();
    const st = STATUS[status] || STATUS.idle;
    const wifi = this._num("sensor.wifi_signal");
    const light = this._st("light.chamber_light");
    const lightOn = light?.state === "on";
    const wifiIcon =
      wifi == null || wifi === 0
        ? "mdi:wifi-off"
        : wifi > -55 ? "mdi:wifi-strength-4" : wifi > -67 ? "mdi:wifi-strength-3" : wifi > -78 ? "mdi:wifi-strength-2" : "mdi:wifi-strength-1";
    const label =
      status === "powered_off" ? t("powered_off") : status === "offline" ? t("offline") : this._fmt("sensor.print_status") || t("offline");
    const power = this._powerState();
    const watts = this._config.power_sensor ? parseFloat(this._hass.states[this._config.power_sensor]?.state) : NaN;
    const confirming = this._confirm === "power";

    return `
      <div class="header">
        <div class="status-icon" style="--c:${st.color}"><ha-icon icon="${st.icon}"></ha-icon></div>
        <div class="title">
          <div class="name">${esc(name)}</div>
          <div class="sub">${esc(dev?.model || "")}${dev?.model ? " · " : ""}<span style="color:${st.color}">${esc(label)}</span></div>
        </div>
        <div class="header-actions">
          ${Number.isFinite(watts) && power !== "off" ? `<span class="watts" data-more="${esc(this._config.power_sensor)}" title="${t("power")}"><ha-icon icon="mdi:flash"></ha-icon>${Math.round(watts)} W</span>` : ""}
          ${wifi != null && wifi !== 0 ? `<span class="wifi" title="Wi-Fi ${wifi} dBm" data-more="${esc(this._eid("sensor.wifi_signal"))}"><ha-icon icon="${wifiIcon}"></ha-icon></span>` : ""}
          ${light ? `<button class="icon-btn ${lightOn ? "on" : ""}" data-action="light" title="${t("light")}" ${light.state === "unavailable" ? "disabled" : ""}><ha-icon icon="mdi:${lightOn ? "lightbulb-on" : "lightbulb-outline"}"></ha-icon></button>` : ""}
          ${this._eid("button.refresh") && power !== "off" ? `<button class="icon-btn" data-action="refresh" title="${t("force_refresh")}"><ha-icon icon="mdi:refresh"></ha-icon></button>` : ""}
          ${
            power && power !== "off"
              ? `<button class="power-btn ${confirming ? "confirm" : "on"}" data-action="power" title="${t("turn_off_plug")}" ${power === "unavailable" ? "disabled" : ""}><ha-icon icon="mdi:power"></ha-icon>${confirming ? `<span>${t(ACTIVE.includes(status) ? "confirm_off_printing" : "confirm_off")}</span>` : ""}</button>`
              : ""
          }
        </div>
      </div>`;
  }

  _updateMedia() {
    const media = this.shadowRoot.querySelector("#media");
    const img = this.shadowRoot.querySelector("#media-img");
    const cam = this._st("camera.camera");
    const cover = this._st("image.cover_image");
    const status = this._status();
    const offline = this._offline();
    const camOn = cam && cam.state !== "unavailable" && !offline && this._st("switch.camera")?.state !== "off";

    // Pendant l'impression on montre la caméra ; sinon l'aperçu du modèle si disponible
    const preferCover = this._mediaMode === "cover" || (!this._mediaMode && !camOn);
    let src = null;
    let mode = null;
    if (!preferCover && camOn && cam.attributes.access_token) {
      src = `/api/camera_proxy_stream/${cam.entity_id}?token=${cam.attributes.access_token}`;
      mode = "camera";
    } else if (cover?.attributes.entity_picture && !offline) {
      src = cover.attributes.entity_picture;
      mode = "cover";
    } else if (camOn && cam.attributes.access_token) {
      src = `/api/camera_proxy_stream/${cam.entity_id}?token=${cam.attributes.access_token}`;
      mode = "camera";
    }

    media.hidden = !src;
    media.dataset.mode = mode || "";
    if (src && img.getAttribute("src") !== src) img.setAttribute("src", src);
    if (!src) img.removeAttribute("src");

    const canToggle = camOn && cover?.attributes.entity_picture;
    const progress = this._num("sensor.print_progress");
    const active = ["running", "pause", "prepare"].includes(status);
    this.shadowRoot.querySelector("#media-overlay").innerHTML = `
      ${active && progress != null ? `<span class="badge">${Math.round(progress)} %</span>` : ""}
      ${canToggle ? `<button class="icon-btn overlay-btn" data-action="media" title="${t(mode === "camera" ? "show_model" : "show_camera")}"><ha-icon icon="${mode === "camera" ? "mdi:cube-outline" : "mdi:cctv"}"></ha-icon></button>` : ""}`;
  }

  _errorsHtml() {
    const hms = this._st("binary_sensor.hms");
    const err = this._st("binary_sensor.print_error");
    const items = [];
    if (hms?.state === "on") {
      const a = hms.attributes;
      const count = Number(a.Count || a.count || 0) || 1;
      for (let i = 1; i <= count; i++) {
        const text = a[`${i}-Error`] || a[`${i}-error`];
        const wiki = a[`${i}-Wiki`] || a[`${i}-wiki`];
        const severity = a[`${i}-Severity`] || a[`${i}-severity`] || "";
        if (text) items.push({ text, wiki, severity });
      }
      if (!items.length) items.push({ text: t("hms_error") });
    }
    if (err?.state === "on") {
      items.push({ text: err.attributes.error || err.attributes.Error || t("print_error"), code: err.attributes.code });
    }
    if (!items.length) return "";
    return `
      <div class="errors">
        ${items
          .map(
            (it) => `
          <div class="error">
            <ha-icon icon="mdi:alert"></ha-icon>
            <div class="error-text">${esc(it.text)}${it.severity ? `<span class="muted"> · ${esc(it.severity)}</span>` : ""}${it.code ? `<span class="muted"> · ${esc(it.code)}</span>` : ""}</div>
            ${it.wiki ? `<a href="${esc(it.wiki)}" target="_blank" rel="noreferrer" title="${t("bambu_wiki")}"><ha-icon icon="mdi:open-in-new"></ha-icon></a>` : ""}
          </div>`
          )
          .join("")}
      </div>`;
  }

  _jobHtml() {
    const status = this._status();
    if (status === "powered_off") {
      const unavailable = this._powerState() === "unavailable";
      return `
        <div class="section powered-off">
          <ha-icon icon="mdi:power-plug-off-outline"></ha-icon>
          <div>${t("printer_off")}</div>
          <button class="btn primary" data-action="power-on" ${unavailable ? "disabled" : ""}><ha-icon icon="mdi:power"></ha-icon>${t("turn_on")}</button>
        </div>`;
    }
    if (status === "offline") {
      return `<div class="section empty">${t("printer_offline")}</div>`;
    }
    const active = ACTIVE.includes(status);
    const progress = this._num("sensor.print_progress") ?? 0;
    const task = this._val("sensor.subtask_name") || this._val("sensor.gcode_file");
    const layer = this._num("sensor.current_layer");
    const layers = this._num("sensor.total_layers");
    const remaining = this._num("sensor.remaining_time");
    const stage = this._fmt("sensor.stage");
    const weight = this._num("sensor.print_weight");
    const length = this._num("sensor.print_length");
    const st = STATUS[status] || STATUS.idle;

    if (!active && !task) {
      return `<div class="section empty">${t("no_print")}</div>`;
    }

    const end = remaining ? this._endTime(remaining) : null;
    return `
      <div class="section job">
        <div class="job-title" data-more="${esc(this._eid("sensor.subtask_name") || "")}">
          <ha-icon icon="mdi:cube-outline"></ha-icon><span>${esc(task || t("print"))}</span>
        </div>
        ${active && stage && stage !== this._fmt("sensor.print_status") ? `<div class="stage">${esc(stage)}</div>` : ""}
        <div class="progress" style="--p:${progress}%;--c:${st.color}"><div></div></div>
        <div class="stats">
          ${this._stat("mdi:percent-outline", `${Math.round(progress)} %`, t("progress"))}
          ${layers ? this._stat("mdi:layers-outline", `${layer ?? 0} / ${layers}`, t("layers")) : ""}
          ${active && remaining ? this._stat("mdi:timer-sand", this._duration(remaining), t("remaining")) : ""}
          ${active && end ? this._stat("mdi:flag-checkered", end, t("estimated_end")) : ""}
          ${weight ? this._stat("mdi:weight-gram", `${Math.round(weight)} g`, t("filament")) : ""}
          ${length ? this._stat("mdi:ruler", `${length.toFixed(1)} m`, t("length")) : ""}
        </div>
      </div>`;
  }

  _stat(icon, value, label) {
    return `<div class="stat"><ha-icon icon="${icon}"></ha-icon><div><div class="stat-value">${esc(value)}</div><div class="stat-label">${esc(label)}</div></div></div>`;
  }

  _controlsHtml() {
    const status = this._status();
    if (this._offline()) return "";
    const pause = this._st("button.pause");
    const resume = this._st("button.resume");
    const stop = this._st("button.stop");
    const speed = this._st("select.Speed") || this._st("select.printing_speed");
    const canPause = status === "running" && pause && pause.state !== "unavailable";
    const canResume = status === "pause" && resume && resume.state !== "unavailable";
    const canStop = ["running", "pause", "prepare"].includes(status) && stop && stop.state !== "unavailable";
    const speedAvail = speed && speed.state !== "unavailable";
    if (!canPause && !canResume && !canStop && !speedAvail) return "";

    return `
      <div class="section controls">
        <div class="buttons">
          ${canPause ? `<button class="btn" data-action="press" data-entity="${esc(pause.entity_id)}"><ha-icon icon="mdi:pause"></ha-icon>${t("pause")}</button>` : ""}
          ${canResume ? `<button class="btn primary" data-action="press" data-entity="${esc(resume.entity_id)}"><ha-icon icon="mdi:play"></ha-icon>${t("resume")}</button>` : ""}
          ${canStop ? `<button class="btn danger" data-action="stop" data-entity="${esc(stop.entity_id)}"><ha-icon icon="mdi:stop"></ha-icon>${t(this._confirm === "stop" ? "confirm_stop" : "stop")}</button>` : ""}
        </div>
        ${
          speedAvail
            ? `<div class="speeds">${SPEEDS.filter((s) => (speed.attributes.options || []).includes(s.value))
                .map(
                  (s) =>
                    `<button class="chip ${speed.state === s.value ? "on" : ""}" data-action="speed" data-entity="${esc(speed.entity_id)}" data-value="${s.value}" title="${t(`speed_${s.value}`)}"><ha-icon icon="${s.icon}"></ha-icon>${t(`speed_${s.value}`)}</button>`
                )
                .join("")}</div>`
            : ""
        }
      </div>`;
  }

  _tempsHtml() {
    const rows = [
      { label: t("nozzle"), icon: "mdi:printer-3d-nozzle-heat", cur: "sensor.nozzle_temp", target: "sensor.target_nozzle_temp", edit: "number.target_nozzle_temperature", max: 300 },
      { label: t("bed"), icon: "mdi:radiator", cur: "sensor.bed_temp", target: "sensor.target_bed_temp", edit: "number.target_bed_temperature", max: 120 },
      { label: t("chamber"), icon: "mdi:thermometer", cur: "sensor.chamber_temp", max: 65 },
    ].filter((r) => this._st(r.cur));
    if (!rows.length || this._offline()) return "";

    return `
      <div class="section">
        <div class="section-label">${t("temperatures")}</div>
        <div class="tiles">
          ${rows
            .map((r) => {
              const cur = this._num(r.cur);
              const target = r.target ? this._num(r.target) : null;
              const heating = target && cur != null && target - cur > 3;
              const pct = cur != null ? Math.min(100, (cur / r.max) * 100) : 0;
              return `
              <div class="tile" data-more="${esc(this._eid(r.edit) || this._eid(r.cur))}" title="${r.edit ? t("edit_target") : ""}">
                <ha-icon icon="${r.icon}" class="${heating ? "heating" : ""}"></ha-icon>
                <div class="tile-main">
                  <div class="tile-value">${cur != null ? Math.round(cur) : "–"}<small> °C</small></div>
                  <div class="tile-label">${r.label}${target ? t("target", { t: Math.round(target) }) : ""}</div>
                  <div class="mini-bar ${heating ? "heating" : ""}" style="--p:${pct}%"><div></div></div>
                </div>
              </div>`;
            })
            .join("")}
        </div>
      </div>`;
  }

  _fansHtml() {
    if (this._offline()) return "";
    const fans = FANS.map((f) => ({ ...f, speed: this._st(`sensor.${f.key}_speed`), fan: this._st(`fan.${f.key}`) })).filter(
      (f) => f.speed || f.fan
    );
    if (!fans.length) return "";
    return `
      <div class="section">
        <div class="section-label">${t("fans")}</div>
        <div class="fans">
          ${fans
            .map((f) => {
              const v = parseFloat(f.speed?.state ?? f.fan?.attributes.percentage);
              const pct = Number.isFinite(v) ? Math.round(v) : null;
              return `
              <div class="fan" data-more="${esc(f.fan?.entity_id || f.speed?.entity_id)}">
                <ha-icon icon="${f.icon}" class="${pct ? "spin" : ""}" style="--d:${pct ? Math.max(0.4, 2.5 - pct / 50) : 0}s"></ha-icon>
                <div class="fan-value">${pct != null ? `${pct} %` : "–"}</div>
                <div class="tile-label">${t(`fan_${f.key}`)}</div>
              </div>`;
            })
            .join("")}
        </div>
      </div>`;
  }

  _amsHtml() {
    const { ams, external } = this._map;
    if (!ams.length && !external) return "";
    const blocks = ams.map((a) => {
      const hIdx = this._st(a.sensors["sensor.humidity_index"]);
      const hum = this._st(a.sensors["sensor.humidity"]);
      const temp = this._st(a.sensors["sensor.temperature"]);
      const meta = [
        hIdx && !BAD.includes(hIdx.state) ? `<span title="${t("humidity_index")}"><ha-icon icon="mdi:water-percent"></ha-icon>${esc(hIdx.state)}/5</span>` : "",
        hum && !BAD.includes(hum.state) ? `<span title="${t("humidity")}"><ha-icon icon="mdi:water"></ha-icon>${esc(Math.round(hum.state))} %</span>` : "",
        temp && !BAD.includes(temp.state) ? `<span title="${t("temperature")}"><ha-icon icon="mdi:thermometer"></ha-icon>${esc(Math.round(temp.state))} °C</span>` : "",
      ].join("");
      const unavailable = a.trays.every((t) => this._hass.states[t]?.state === "unavailable");
      return `
        <div class="ams">
          <div class="ams-head"><span class="ams-name">${esc(this._shortAmsName(a))}</span><span class="ams-meta">${unavailable ? `<span class="muted">${t("unavailable")}</span>` : meta}</span></div>
          <div class="trays">${a.trays.map((t, i) => this._trayHtml(t, `${i + 1}`)).join("")}</div>
        </div>`;
    });
    if (external) {
      blocks.push(`
        <div class="ams external">
          <div class="ams-head"><span class="ams-name">${t("external_spool")}</span></div>
          <div class="trays">${this._trayHtml(external, "Ext")}</div>
        </div>`);
    }
    return `<div class="section"><div class="section-label">${t("filaments")}</div><div class="ams-list">${blocks.join("")}</div></div>`;
  }

  _shortAmsName(a) {
    const m = /AMS[_ ]?(\d+)$/i.exec(a.name);
    const model = a.model && a.model !== "AMS" ? a.model : "AMS";
    return m ? `${model} ${m[1]}` : a.name;
  }

  _trayHtml(eid, label) {
    const s = this._hass.states[eid];
    const a = s?.attributes || {};
    const color = typeof a.color === "string" ? a.color : "";
    const empty = !s || s.state === "unavailable" || a.empty === true || !color || /^#?0{6}(00)?$/i.test(color) && !a.type;
    const hex = color.length === 9 ? color.slice(0, 7) : color || "#000";
    const alpha = color.length === 9 ? parseInt(color.slice(7), 16) / 255 : 1;
    const remain = Number(a.remain);
    const showRemain = Number.isFinite(remain) && remain >= 0 && a.remain_enabled !== false;
    const title = [a.name || s?.state, a.type, a.nozzle_temp_min ? `${a.nozzle_temp_min}–${a.nozzle_temp_max} °C` : "", showRemain ? t("remaining_pct", { n: remain }) : ""]
      .filter(Boolean)
      .join(" · ");
    return `
      <div class="tray ${a.active ? "active" : ""} ${empty ? "empty" : ""}" data-more="${esc(eid)}" title="${esc(title)}">
        <div class="spool" style="--col:${esc(hex)};--a:${alpha};--rem:${showRemain ? remain : 100}%">
          <div class="fill"></div>
          <span class="tray-num">${esc(label)}</span>
        </div>
        <div class="tray-type">${empty ? t("empty") : esc(a.type || "?")}</div>
        <div class="tray-name">${empty ? "" : esc(a.name || s.state || "")}</div>
        ${showRemain && !empty ? `<div class="tray-remain">${remain} %</div>` : ""}
      </div>`;
  }

  _detailsHtml() {
    const items = [
      ["mdi:printer-3d-nozzle", t("nozzle"), [this._fmt("sensor.nozzle_diameter"), this._fmt("sensor.nozzle_type")].filter(Boolean).join(" · "), "sensor.nozzle_type"],
      ["mdi:texture-box", t("bed"), this._fmt("sensor.print_bed_type"), "sensor.print_bed_type"],
      ["mdi:speedometer", t("profile"), this._fmt("sensor.speed_profile"), "sensor.speed_profile"],
      ["mdi:file-cog-outline", t("type"), this._fmt("sensor.print_type"), "sensor.print_type"],
      ["mdi:clock-outline", t("usage"), this._num("sensor.total_usage_hours") != null ? `${Math.round(this._num("sensor.total_usage_hours"))} h` : null, "sensor.total_usage_hours"],
      ["mdi:video-outline", t("timelapse"), this._val("binary_sensor.timelapse") ? t(this._val("binary_sensor.timelapse") === "on" ? "on" : "off") : null, "binary_sensor.timelapse"],
      ["mdi:lan-connect", t("connection"), this._fmt("sensor.mqtt_mode"), "sensor.mqtt_mode"],
      ["mdi:wifi", "Wi-Fi", this._num("sensor.wifi_signal") ? `${this._num("sensor.wifi_signal")} dBm` : null, "sensor.wifi_signal"],
      ["mdi:power-socket-eu", t("plug"), this._config.power_switch ? this._fmt(this._config.power_switch) : null, this._config.power_switch],
      ["mdi:lightning-bolt", t("energy"), this._config.energy_sensor ? this._fmt(this._config.energy_sensor) : null, this._config.energy_sensor],
    ].filter((i) => i[2]);
    const fw = this._val("binary_sensor.firmware_update") === "on";
    if (!items.length && !fw) return "";
    return `
      <div class="section">
        <div class="section-label">${t("details")}</div>
        ${fw ? `<div class="notice" data-more="${esc(this._eid("binary_sensor.firmware_update"))}"><ha-icon icon="mdi:update"></ha-icon>${t("firmware_update")}</div>` : ""}
        <div class="details">
          ${items
            .map(
              ([icon, label, value, key]) => `
            <div class="detail" data-more="${esc(this._eid(key) || (this._hass.states[key] ? key : ""))}">
              <ha-icon icon="${icon}"></ha-icon><span class="detail-label">${label}</span><span class="detail-value">${esc(value)}</span>
            </div>`
            )
            .join("")}
        </div>
      </div>`;
  }

  /* ---------- Formatage ---------- */

  _duration(min) {
    min = Math.round(min);
    const d = Math.floor(min / 1440);
    const h = Math.floor((min % 1440) / 60);
    const m = min % 60;
    if (d) return t("days_hours", { d, h });
    if (h) return `${h} h ${String(m).padStart(2, "0")}`;
    return `${m} min`;
  }

  _endTime(remainingMin) {
    const end = new Date(Date.now() + remainingMin * 60000);
    const locale = this._hass.locale?.language || "fr";
    const time = end.toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit" });
    const today = new Date();
    const days = Math.round((new Date(end).setHours(0, 0, 0, 0) - today.setHours(0, 0, 0, 0)) / 86400000);
    if (days === 0) return time;
    if (days === 1) return t("tomorrow", { time });
    return `${end.toLocaleDateString(locale, { weekday: "short" })} ${time}`;
  }

  /* ---------- Actions ---------- */

  _onClick(ev) {
    const actionEl = ev.target.closest("[data-action]");
    if (actionEl) {
      ev.stopPropagation();
      if (actionEl.disabled) return;
      const { action, entity, value } = actionEl.dataset;
      switch (action) {
        case "light":
          return this._call("light", "toggle", { entity_id: this._eid("light.chamber_light") });
        case "refresh":
          return this._call("button", "press", { entity_id: this._eid("button.refresh") }, t("refresh_requested"));
        case "press":
          return this._call("button", "press", { entity_id: entity });
        case "speed":
          return this._call("select", "select_option", { entity_id: entity, option: value });
        case "media":
          this._mediaMode = this.shadowRoot.querySelector("#media").dataset.mode === "camera" ? "cover" : "camera";
          return this._updateMedia();
        case "stop":
          if (!this._askConfirm("stop")) return;
          return this._call("button", "press", { entity_id: entity }, t("stop_requested"));
        case "power":
          if (!this._askConfirm("power")) return;
          return this._call("homeassistant", "turn_off", { entity_id: this._config.power_switch }, t("plug_off"));
        case "power-on":
          return this._call("homeassistant", "turn_on", { entity_id: this._config.power_switch }, t("plug_on"));
      }
      return;
    }
    const more = ev.target.closest("[data-more]")?.dataset.more;
    if (more) {
      this.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId: more }, bubbles: true, composed: true }));
    }
  }

  // Action sensible : un premier clic arme la confirmation (4 s), le second la valide
  _askConfirm(name) {
    clearTimeout(this._confirmTimer);
    if (this._confirm !== name) {
      this._confirm = name;
      this._confirmTimer = setTimeout(() => {
        this._confirm = null;
        this._update(true);
      }, 4000);
      this._update(true);
      return false;
    }
    this._confirm = null;
    this._update(true);
    return true;
  }

  async _call(domain, service, data, okMessage) {
    try {
      await this._hass.callService(domain, service, data);
      if (okMessage) this._toast(okMessage);
    } catch (err) {
      this._toast(t("failed", { error: err.message || err }));
    }
  }

  _toast(message) {
    this.dispatchEvent(new CustomEvent("hass-notification", { detail: { message }, bubbles: true, composed: true }));
  }
}

const STYLES = `
  :host { display: block; }
  ha-card { overflow: hidden; }
  [hidden] { display: none !important; }
  [data-more] { cursor: pointer; }
  .muted { color: var(--secondary-text-color); font-weight: normal; }

  .header { display: flex; align-items: center; gap: 12px; padding: 14px 16px; }
  .status-icon {
    flex: none; width: 42px; height: 42px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    color: var(--c); background: color-mix(in srgb, var(--c) 16%, transparent);
  }
  .title { flex: 1; min-width: 0; }
  .name { font-size: 1.15rem; font-weight: 500; color: var(--primary-text-color); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .sub { font-size: 0.85rem; color: var(--secondary-text-color); }
  .header-actions { display: flex; align-items: center; gap: 2px; color: var(--secondary-text-color); }
  .wifi { display: inline-flex; padding: 6px; }
  .wifi ha-icon { --mdc-icon-size: 20px; }
  .icon-btn {
    display: inline-flex; border: none; background: none; padding: 8px; border-radius: 50%;
    cursor: pointer; color: var(--secondary-text-color);
  }
  .icon-btn:hover { background: var(--secondary-background-color); }
  .icon-btn.on { color: var(--state-light-active-color, #ffc107); }
  .icon-btn:disabled { opacity: 0.4; cursor: not-allowed; }

  .media { position: relative; background: #000; aspect-ratio: 16 / 9; }
  .media[data-mode="cover"] { background: var(--secondary-background-color); }
  .media img { width: 100%; height: 100%; object-fit: contain; display: block; }
  .media-overlay { position: absolute; inset: 8px; pointer-events: none; display: flex; justify-content: space-between; align-items: flex-start; }
  .media-overlay > * { pointer-events: auto; }
  .badge { padding: 3px 10px; border-radius: 12px; background: rgba(0,0,0,0.6); color: #fff; font-size: 0.85rem; font-weight: 500; }
  .overlay-btn { margin-left: auto; background: rgba(0,0,0,0.5); color: #fff; }
  .overlay-btn:hover { background: rgba(0,0,0,0.7); }

  .watts { display: inline-flex; align-items: center; gap: 2px; padding: 0 6px; font-size: 0.85rem; white-space: nowrap; }
  .watts ha-icon { --mdc-icon-size: 16px; }
  .power-btn {
    display: inline-flex; align-items: center; gap: 6px; padding: 8px; border: none; border-radius: 20px;
    background: none; cursor: pointer; font: inherit; font-size: 0.8rem; font-weight: 500;
    color: var(--success-color, #43a047);
  }
  .power-btn:hover { background: var(--secondary-background-color); }
  .power-btn.confirm { padding: 6px 12px 6px 8px; background: var(--error-color, #db4437); color: #fff; }
  .power-btn:disabled { opacity: 0.4; cursor: not-allowed; }
  .powered-off { display: flex; flex-direction: column; align-items: center; gap: 10px; padding: 28px 16px; text-align: center; color: var(--secondary-text-color); }
  .powered-off > ha-icon { --mdc-icon-size: 40px; color: var(--disabled-text-color, #9e9e9e); }

  /* Mise en page : 1 colonne étroite, 2 colonnes moyennes, 3 colonnes larges */
  ha-card { display: block; container-type: inline-size; }
  .layout { display: grid; grid-template-columns: minmax(0, 1fr); }
  @container (max-width: 460px) {
    .wifi, [data-action="refresh"] { display: none; }
  }
  .col { min-width: 0; }
  @container (min-width: 700px) {
    .layout {
      grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
      grid-template-areas: "main side" "main ams" "main details";
      grid-template-rows: auto auto 1fr;
      border-top: 1px solid var(--divider-color);
    }
    .col-main { grid-area: main; }
    .col-side { grid-area: side; }
    .col-ams { grid-area: ams; }
    .col-details { grid-area: details; }
    .col-side, .col-ams, .col-details { border-left: 1px solid var(--divider-color); }
    .col-side > .section:first-child, .col-side[hidden] + .col-ams > .section:first-child { border-top: none; }
    .media { margin: 12px 16px; border-radius: 12px; overflow: hidden; }
  }
  @container (min-width: 1100px) {
    .layout {
      grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr) minmax(0, 1fr);
      grid-template-areas: "main side ams" "main details ams";
      grid-template-rows: auto 1fr;
    }
    .col-ams > .section:first-child { border-top: none; }
    .col-side[hidden] ~ .col-details > .section:first-child { border-top: none; }
  }
  .section { padding: 12px 16px; border-top: 1px solid var(--divider-color); }
  .section.empty { color: var(--secondary-text-color); font-style: italic; font-size: 0.9rem; }
  .section-label {
    margin-bottom: 8px; font-size: 0.75rem; font-weight: 500; letter-spacing: 0.04em;
    text-transform: uppercase; color: var(--secondary-text-color);
  }

  .errors { display: flex; flex-direction: column; gap: 6px; padding: 10px 16px; background: color-mix(in srgb, var(--error-color, #db4437) 12%, transparent); }
  .error { display: flex; align-items: center; gap: 10px; color: var(--error-color, #db4437); font-size: 0.9rem; }
  .error-text { flex: 1; color: var(--primary-text-color); }
  .error a { color: inherit; display: inline-flex; }
  .error ha-icon { --mdc-icon-size: 20px; }

  .job-title { display: flex; align-items: center; gap: 8px; font-weight: 500; color: var(--primary-text-color); }
  .job-title span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .job-title ha-icon { --mdc-icon-size: 20px; color: var(--secondary-text-color); flex: none; }
  .stage { margin-top: 2px; font-size: 0.85rem; color: var(--secondary-text-color); }
  .progress { margin: 10px 0; height: 8px; border-radius: 4px; background: var(--secondary-background-color); overflow: hidden; }
  .progress > div { width: var(--p); height: 100%; background: var(--c); border-radius: 4px; transition: width 0.6s; }
  .stats { display: grid; grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); gap: 10px; }
  .stat { display: flex; align-items: center; gap: 8px; }
  .stat ha-icon { --mdc-icon-size: 20px; color: var(--secondary-text-color); flex: none; }
  .stat-value { font-weight: 500; color: var(--primary-text-color); font-size: 0.95rem; white-space: nowrap; }
  .stat-label, .tile-label { font-size: 0.75rem; color: var(--secondary-text-color); }

  .controls { display: flex; flex-direction: column; gap: 10px; }
  .buttons { display: flex; gap: 8px; flex-wrap: wrap; }
  .buttons:empty { display: none; }
  .btn {
    display: inline-flex; align-items: center; gap: 6px; padding: 8px 16px;
    border-radius: 20px; font: inherit; font-weight: 500; cursor: pointer;
    border: 1px solid var(--divider-color); background: transparent; color: var(--primary-text-color);
  }
  .btn ha-icon { --mdc-icon-size: 18px; }
  .btn.primary { background: var(--primary-color); border-color: var(--primary-color); color: var(--text-primary-color, #fff); }
  .btn.danger { color: var(--error-color, #db4437); border-color: color-mix(in srgb, var(--error-color, #db4437) 50%, transparent); }
  .speeds { display: flex; flex-wrap: wrap; gap: 6px; }
  .chip {
    display: inline-flex; align-items: center; gap: 4px;
    padding: 5px 10px 5px 7px; border-radius: 16px; cursor: pointer;
    font: inherit; font-size: 0.85rem;
    border: 1px solid var(--divider-color);
    background: var(--card-background-color); color: var(--primary-text-color);
  }
  .chip ha-icon { --mdc-icon-size: 16px; color: var(--secondary-text-color); }
  .chip.on { background: color-mix(in srgb, var(--primary-color) 15%, transparent); border-color: var(--primary-color); color: var(--primary-color); }
  .chip.on ha-icon { color: var(--primary-color); }

  .tiles { display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 8px; }
  .tile { display: flex; gap: 10px; align-items: center; padding: 10px; border-radius: 12px; background: var(--secondary-background-color); }
  .tile > ha-icon { color: var(--secondary-text-color); flex: none; }
  .tile > ha-icon.heating { color: var(--warning-color, #ffa000); animation: pulse 1.6s ease-in-out infinite; }
  .tile-main { flex: 1; min-width: 0; }
  .tile-value { font-size: 1.3rem; font-weight: 500; color: var(--primary-text-color); line-height: 1.2; }
  .tile-value small { font-size: 0.75rem; font-weight: normal; color: var(--secondary-text-color); }
  .mini-bar { margin-top: 6px; height: 4px; border-radius: 2px; background: var(--divider-color); overflow: hidden; }
  .mini-bar > div { width: var(--p); height: 100%; background: var(--primary-color); }
  .mini-bar.heating > div { background: var(--warning-color, #ffa000); }

  .fans { display: grid; grid-template-columns: repeat(auto-fit, minmax(70px, 1fr)); gap: 8px; text-align: center; }
  .fan { padding: 8px 4px; border-radius: 12px; background: var(--secondary-background-color); }
  .fan ha-icon { color: var(--secondary-text-color); }
  .fan ha-icon.spin { color: var(--primary-color); animation: spin var(--d) linear infinite; }
  .fan-value { font-weight: 500; color: var(--primary-text-color); font-size: 0.95rem; }

  .ams-list { display: flex; flex-wrap: wrap; gap: 10px; }
  .ams { flex: 1 1 260px; padding: 10px; border-radius: 12px; background: var(--secondary-background-color); }
  .ams.external { flex: 0 1 auto; }
  .ams-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; font-size: 0.85rem; }
  .ams-name { font-weight: 500; color: var(--primary-text-color); }
  .ams-meta { display: flex; gap: 10px; color: var(--secondary-text-color); }
  .ams-meta span { display: inline-flex; align-items: center; gap: 2px; }
  .ams-meta ha-icon { --mdc-icon-size: 16px; }
  .trays { display: flex; gap: 8px; }
  .tray { flex: 1; min-width: 56px; display: flex; flex-direction: column; align-items: center; gap: 2px; padding: 6px 2px; border-radius: 10px; border: 2px solid transparent; }
  .tray.active { border-color: var(--primary-color); background: color-mix(in srgb, var(--primary-color) 8%, transparent); }
  .spool {
    position: relative; width: 40px; height: 40px; border-radius: 50%; overflow: hidden;
    border: 2px solid var(--divider-color); background: var(--card-background-color);
  }
  .spool .fill { position: absolute; left: 0; right: 0; bottom: 0; height: var(--rem); background: var(--col); opacity: var(--a); }
  .tray.empty .spool { border-style: dashed; }
  .tray.empty .fill { display: none; }
  .tray-num {
    position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
    font-size: 0.7rem; font-weight: 600; color: #fff; text-shadow: 0 0 3px rgba(0,0,0,0.8);
  }
  .tray.empty .tray-num { color: var(--secondary-text-color); text-shadow: none; }
  .tray-type { font-size: 0.8rem; font-weight: 500; color: var(--primary-text-color); }
  .tray-name { font-size: 0.7rem; color: var(--secondary-text-color); max-width: 72px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .tray-remain { font-size: 0.7rem; color: var(--secondary-text-color); }

  .notice { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; padding: 8px 10px; border-radius: 10px; font-size: 0.85rem; background: color-mix(in srgb, var(--info-color, #039be5) 14%, transparent); color: var(--primary-text-color); }
  .notice ha-icon { color: var(--info-color, #039be5); --mdc-icon-size: 18px; }
  .details { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 4px 16px; }
  .detail { display: flex; align-items: center; gap: 8px; font-size: 0.85rem; padding: 3px 0; min-width: 0; }
  .detail ha-icon { --mdc-icon-size: 18px; color: var(--secondary-text-color); flex: none; }
  .detail-label { color: var(--secondary-text-color); }
  .detail-value { margin-left: auto; color: var(--primary-text-color); text-align: right; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes pulse { 50% { opacity: 0.45; } }
  @media (prefers-reduced-motion: reduce) {
    .fan ha-icon.spin, .tile > ha-icon.heating { animation: none; }
  }
`;

if (!customElements.get("bambu-printer-card")) customElements.define("bambu-printer-card", BambuPrinterCard);

window.customCards = window.customCards || [];
if (!window.customCards.some((c) => c.type === "bambu-printer-card")) {
  window.customCards.push({
    type: "bambu-printer-card",
    name: "Bambu Printer Card",
    description: t("card_description"),
    preview: false,
  });
}

console.info(`%c BAMBU-PRINTER-CARD %c v${CARD_VERSION} `, "background:#00ae42;color:#fff", "background:#444;color:#fff");
