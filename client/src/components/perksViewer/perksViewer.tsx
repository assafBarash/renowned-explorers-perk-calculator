import { PerkSourceFilters } from '../perkSourceFilters/perkSourceFilters';
import { PerkTreeFilters } from '../perkTreeFilters/perkTreeFilters';

export const PerksViewer = () => {
  return (
    <div>
      <h3>Perks Viewer</h3>
      <div>
        <h4>filters</h4>
        <div>
          <PerkTreeFilters onChange={console.log} />
          <PerkSourceFilters onChange={console.log} />
        </div>
      </div>
      {/* <div>{JSON.stringify(perks, null, '\t')}</div> */}
    </div>
  );
};
