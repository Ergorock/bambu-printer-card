# Bambu Printer Card

*[Version française](README.fr.md)*

Lovelace card that gathers everything about a Bambu Lab printer
reported by the [`bambu_lab`](https://github.com/greghesp/ha-bambulab) HACS integration.

- Header: status, model, Wi-Fi signal, chamber light, forced refresh
- Live camera, or the model preview (a button switches between them), with the progress overlaid
- HMS errors and print errors, with a link to the Bambu wiki
- Current print: name, stage, progress bar, layers, time left, estimated end time, filament weight and length
- Controls: pause, resume, stop (confirmed by a second click), speed profile
- Nozzle and bed temperatures (and chamber, if the printer has one) with their target; a click opens the entity dialog to change the target
- Fans
- AMS (color, type, remaining amount, active slot, humidity) and external spool
- Details: nozzle, bed, profile, usage time, timelapse, connection, firmware update

- Smart plug (optional): on/off button in the header (turning off needs a second confirmation click, with a warning while printing), a “Printer off” screen with a Turn on button, power and energy if the plug measures them

A click on almost every element opens the matching entity's dialog (“more-info”).

The interface is available in English and French (it follows the Home Assistant language).

The layout follows the card width (container queries): 1 column below 700 px, 2 columns up to 1100 px, 3 columns beyond.
For a wide card in a *sections* view, make the section full width (`column_span` equal to the view's `max_columns`).

## Installation

### HACS (custom repository)

1. HACS → ⋮ menu → *Custom repositories* → add `https://github.com/Ergorock/bambu-printer-card`, category **Dashboard**.
2. Install **Bambu Printer Card**, then reload your browser.

### Manual

1. Copy `bambu-printer-card.js` to `config/www/bambu-printer-card.js`.
2. *Settings → Dashboards → ⋮ → Resources*: add `/local/bambu-printer-card.js?v=1.1.0` (type *JavaScript module*).

Then reload the page with Ctrl+Shift+R.

## Configuration

Add the “Bambu Printer Card” from the visual editor, or in YAML:

```yaml
type: custom:bambu-printer-card
device: 6a563c3a56e7cb6aecd12f463f278011
title: 3D printer             # optional
show_camera: true
show_controls: true
show_temperatures: true
show_fans: true
show_ams: true
show_details: true
power_switch: switch.3d_printer_outlet   # optional
power_sensor: sensor.plug_power          # optional, in W
energy_sensor: sensor.plug_energy        # optional, in kWh
```

Entities are found from the device through their `unique_id`: renaming entities doesn't break the card.
To force a specific entity, use `entities:` (key `domain.key` → `entity_id`), for example
`sensor.nozzle_temp: sensor.my_nozzle`.

## Development

`demo.html` shows the card with a fake `hass`, in four scenarios (printing, paused with an error, idle, offline).
It runs with the `demo` configuration of `.claude/launch.json` (http://localhost:8765/demo.html).
