import { useState } from 'react';
import { PerkSources, PerkTrees } from '../../business/types';
import { PerkSourceFilters } from '../perkSourceFilters/perkSourceFilters';
import { PerksTable } from '../PerksTable/PerksTable';
import { PerkTreeFilters } from '../perkTreeFilters/perkTreeFilters';
import './perksViewer.css';

export const PerksViewer = () => {
  const [displayTrees, setDisplayTrees] = useState<PerkTrees[]>([]);
  const [displaySources, setDisplaySources] = useState<PerkSources[]>([]);

  return (
    <div>
      <h3>Perks Viewer</h3>
      <div>
        <h4>filters</h4>
        <div className={'perks-filters'}>
          Perk Trees
          <PerkTreeFilters onChange={setDisplayTrees} />
          Perk Sources
          <PerkSourceFilters onChange={setDisplaySources} />
        </div>
      </div>
      <div>
        <h4>table</h4>
        <PerksTable
          displayTrees={displayTrees}
          displaySources={displaySources}
        />
      </div>
    </div>
  );
};
