import { X, Flame, Map, BarChart2, Layers, Sparkles, Cpu, Database } from 'lucide-react';
import './LstExplainerModal.css';
import './AboutModal.css';

export default function AboutModal({ onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-card modal-card--large glass-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        <div className="modal-icon about-icon">
          <Flame size={22} />
        </div>

        <h2>What is Urban Heat?</h2>
        <p className="modal-intro">
          Cities get hotter than the countryside around them — concrete,
          asphalt, and packed buildings trap heat that green, open land
          would otherwise release. This is called the{' '}
          <strong>urban heat island effect</strong>, and it makes some
          neighborhoods genuinely more dangerous in a heatwave than others
          just a few kilometers away.
        </p>
        <p className="modal-intro">
          This tool maps that effect, block by block, across major Indian
          cities — and lets you test what would actually cool things down.
        </p>

        <h3 className="section-heading">How to use it — 3 steps</h3>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-icon">
              <Map size={18} />
            </div>
            <h4>Heat Map</h4>
            <p>
              Explore Mumbai's heat distribution across the metropolitan area.
              Each colored block on the map is a 500m × 500m grid cell — red/pink
              indicates severe hotspot exposure, green is normal, and blue indicates cooler microclimates.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-icon">
              <BarChart2 size={18} />
            </div>
            <h4>Heat Drivers</h4>
            <p>
              See <em>why</em> an area is hot — too much concrete, too few
              trees, far from water, dense buildings — ranked by how much
              each factor actually contributes.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-icon">
              <Layers size={18} />
            </div>
            <h4>Scenarios</h4>
            <p>
              Try fixes — adding trees, cool roofs, more water bodies — and
              see a live before/after comparison, plus an estimated cost to
              actually do it.
            </p>
          </div>
        </div>

        <h3 className="section-heading engine-heading">Engine &amp; data — how this is actually built</h3>

        <div className="engine-grid">
          <div className="engine-card">
            <div className="engine-card-head">
              <Cpu size={16} />
              <span>Prediction engine</span>
            </div>
            <p>
              Every prediction comes from an <strong>XGBoost</strong>{' '}
              regression model — trained on urban-form features like
              vegetation cover, building density, road density, and
              distance to water. We test it with{' '}
              <strong>leave-cities-out cross-validation</strong> (holding
              out entire cities, not just random rows) so the score reflects
              genuine generalization, not memorization. Every driver
              ranking you see is computed with{' '}
              <strong>SHAP</strong>, an explainability method that shows
              exactly how much each factor pushed the temperature up or
              down for that specific cell — not a guess.
            </p>
          </div>

          <div className="engine-card">
            <div className="engine-card-head">
              <Database size={16} />
              <span>Where the data comes from</span>
            </div>
            <p>
              Mumbai's climate baseline (pre-monsoon summer LST)
              is grounded in <strong>real meteorological and Landsat satellite observations</strong>{' '}
              for Mumbai. The spatial grid integrates building density, impervious
              surface fraction, vegetation, and coastal proximity to model urban heat islands.
              The <strong>"Compared against real Landsat data"</strong>{' '}
              validation compares the model predictions against actual Landsat Collection 2 Level-2
              thermal scenes over Mumbai cell-by-cell.
            </p>
          </div>
        </div>

        <div className="about-footnote">
          <Sparkles size={14} />
          <p>
            Wondering what the temperature numbers actually mean? Click the
            (ⓘ) icon next to a city name on the Heat Map or Scenarios page
            for that explanation.
          </p>
        </div>
      </div>
    </div>
  );
}
