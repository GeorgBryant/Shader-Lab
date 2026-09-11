import { styles } from "./styles";
import Slider from "./Slider";
import { PARAMS } from "../shaders/params";
import MenuParticles from "./MenuParticles";

export default function PublicControlPanel({
  settings,
  setSettings,
  collapsed,
  setCollapsed,
  randomizeUniverse,
}) {
  function getParam(key) {
    return PARAMS.find((param) => param.key === key);
  }

  const galaxyCountParam = getParam("galaxyCount");
  const galaxyRadiusParam = getParam("galaxyRadius");
  const coreBrightnessParam = getParam("coreBrightness");
  const haloBrightnessParam = getParam("haloBrightness");
  const nebulaBrightnessParam = getParam("nebulaBrightness");
  const rotationSpeedParam = getParam("rotationSpeed");

  function updateSetting(name, value) {
    setSettings((current) => ({
      ...current,
      [name]: value,
    }));
  }

  return (
    <aside
      style={{
        ...styles.panel,
        ...styles.publicPanel,
        ...(collapsed
          ? styles.publicPanelCollapsed
          : {}),
        overflow: "hidden",
        fontFamily: '"Config Mono", monospace',
      }}
    >
      <MenuParticles />

      <button
        type="button"
        style={{
          ...styles.panelToggle,
          ...(collapsed
            ? {
                right: "8px",
                left: "8px",
                width: "28px",
              }
            : {}),
        }}
        onClick={() =>
          setCollapsed((current) => !current)
        }
        aria-label={
          collapsed
            ? "Open controls"
            : "Close controls"
        }
      >
        {collapsed ? "‹" : "›"}
      </button>

      {!collapsed && (
        <div style={styles.panelInner}>
          <div style={styles.panelContent}>
            <h1 style={styles.title}>
              Shader Lab
            </h1>

<button
  type="button"
  className="randomise-button"
  onClick={randomizeUniverse}
>
  <span>Randomise Seed</span>
  <span className="randomise-icon">↝</span>
</button>

            <section>
              <h2 style={styles.publicSectionTitle}>
                Structure
              </h2>

              <Slider
                label={galaxyCountParam.label}
                value={settings.galaxyCount}
                min={galaxyCountParam.min}
                max={galaxyCountParam.max}
                step={galaxyCountParam.step}
                onChange={(value) =>
                  updateSetting(
                    "galaxyCount",
                    value
                  )
                }
              />

              <Slider
                label="Spiral"
                value={Math.round(
                  (settings.spiralTightness /
                    60) *
                    100
                )}
                min={0}
                max={100}
                step={1}
                suffix="%"
                onChange={(value) =>
                  updateSetting(
                    "spiralTightness",
                    (value / 100) * 60
                  )
                }
              />

              <Slider
                label="Galaxy Size"
                value={Math.round(
                  ((settings.galaxyRadius -
                    galaxyRadiusParam.min) /
                    (galaxyRadiusParam.max -
                      galaxyRadiusParam.min)) *
                    100
                )}
                min={0}
                max={100}
                step={1}
                suffix="%"
                onChange={(value) => {
                  const mappedValue =
                    galaxyRadiusParam.min +
                    (value / 100) *
                      (galaxyRadiusParam.max -
                        galaxyRadiusParam.min);

                  updateSetting(
                    "galaxyRadius",
                    mappedValue
                  );
                }}
              />
            </section>

            <section>
              <h2 style={styles.publicSectionTitle}>
                Atmosphere
              </h2>

              <Slider
                label="Luminosity"
                value={Math.round(
                  (settings.coreBrightness /
                    coreBrightnessParam.default) *
                    50
                )}
                min={0}
                max={100}
                step={1}
                suffix="%"
                onChange={(value) => {
                  const multiplier =
                    value / 50;

                  const haloRadius =
                    1.2 +
                    (value / 100) *
                      (2.3 - 1.2);

                  const dustStrength =
                    0.9 +
                    (value / 100) *
                      (0.5 - 0.9);

                  const dustNebulaStrength =
                    0.6 +
                    (value / 100) *
                      (0.25 - 0.6);

                  setSettings((current) => ({
                    ...current,

                    coreBrightness:
                      coreBrightnessParam.default *
                      multiplier,

                    haloBrightness:
                      haloBrightnessParam.default *
                      multiplier,

                    nebulaBrightness:
                      nebulaBrightnessParam.default *
                      multiplier,

                    haloRadius,
                    dustStrength,
                    dustNebulaStrength,
                  }));
                }}
              />
            </section>

            <section>
              <h2 style={styles.publicSectionTitle}>
                Scene
              </h2>

              <label style={styles.starToggle}>
                <span>Stars</span>

                <input
                  type="checkbox"
                  checked={settings.starsEnabled}
                  onChange={(event) =>
                    updateSetting(
                      "starsEnabled",
                      event.target.checked
                    )
                  }
                  style={{
                    display: "none",
                  }}
                />

                <span
                  style={{
                    ...styles.starCheckbox,
                    ...(settings.starsEnabled
                      ? styles.starCheckboxActive
                      : {}),
                  }}
                >
                  {settings.starsEnabled && (
                    <span
                      style={
                        styles.starCheckboxMark
                      }
                    />
                  )}
                </span>
              </label>

              <Slider
                label="Rotation"
                value={Math.round(
                  (settings.rotationSpeed /
                    1.5) *
                    100
                )}
                min={-100}
                max={100}
                step={1}
                suffix="%"
                onChange={(value) =>
                  updateSetting(
                    "rotationSpeed",
                    (value / 100) * 1.5
                  )
                }
                onReset={() =>
                  updateSetting(
                    "rotationSpeed",
                    rotationSpeedParam.default -
                      0.25
                  )
                }
              />
            </section>

            <section>
              <h2 style={styles.publicSectionTitle}>
                Colour
              </h2>

              <label style={styles.colorControl}>
                <span>Background</span>

                <span style={styles.colorSwatchWrap}>
                  <span
                    style={{
                      ...styles.colorSwatch,
                      backgroundColor:
                        settings.colorA,
                    }}
                  />

                  <input
                    type="color"
                    value={settings.colorA}
                    onChange={(event) =>
                      updateSetting(
                        "colorA",
                        event.target.value
                      )
                    }
                    style={
                      styles.hiddenColorInput
                    }
                  />
                </span>
              </label>

              <label style={styles.colorControl}>
                <span>Galaxy</span>

                <span style={styles.colorSwatchWrap}>
                  <span
                    style={{
                      ...styles.colorSwatch,
                      backgroundColor:
                        settings.colorB,
                    }}
                  />

                  <input
                    type="color"
                    value={settings.colorB}
                    onChange={(event) =>
                      updateSetting(
                        "colorB",
                        event.target.value
                      )
                    }
                    style={
                      styles.hiddenColorInput
                    }
                  />
                </span>
              </label>

              <label style={styles.colorControl}>
                <span>Nebula</span>

                <span style={styles.colorSwatchWrap}>
                  <span
                    style={{
                      ...styles.colorSwatch,
                      backgroundColor:
                        settings.nebulaColor,
                    }}
                  />

                  <input
                    type="color"
                    value={settings.nebulaColor}
                    onChange={(event) =>
                      updateSetting(
                        "nebulaColor",
                        event.target.value
                      )
                    }
                    style={
                      styles.hiddenColorInput
                    }
                  />
                </span>
              </label>
            </section>
          </div>
        </div>
      )}
    </aside>
  );
}