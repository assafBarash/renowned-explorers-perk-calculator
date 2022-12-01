import { FC } from 'react';
import { PerkSources, PerkTrees } from '../../business/types';
import { usePerks } from '../perksProvider/perksProvider';
import './PerksTable.css';
type PerksTableProps = {
  displayTrees?: PerkTrees[];
  displaySources?: PerkSources[];
};

export const PerksTable: FC<PerksTableProps> = ({
  displayTrees = [],
  displaySources = [],
}) => {
  const perks = usePerks();

  const SourceRow: FC<{
    source: PerkSources;
    value: string[];
    asHead?: boolean;
  }> = ({ source, value, asHead }) => {
    const val = value.join('\n');
    const Comp = () => (asHead ? <th>{val}</th> : <td>{val}</td>);
    return displaySources.includes(source) ? <Comp /> : <></>;
  };

  return (
    <div>
      {Object.entries(perks)
        .filter(([perkTree]) =>
          displayTrees
            .map((p) => p.toLowerCase())
            .includes(perkTree.toLowerCase() as PerkTrees)
        )
        .map(([treeName, treePerks], idx) => (
          <div key={`${treeName}-${idx}`}>
            <span>{treeName}</span>
            <table className='perks-table'>
              <thead>
                <tr>
                  <th>Perk</th>
                  <SourceRow
                    asHead={true}
                    source={PerkSources.CrewMembers}
                    value={['Crew Members']}
                  />
                  <SourceRow
                    asHead={true}
                    source={PerkSources.Equipment}
                    value={['Equipment']}
                  />
                  <SourceRow
                    asHead={true}
                    source={PerkSources.Entourage}
                    value={['Entourage']}
                  />
                  <SourceRow
                    asHead={true}
                    source={PerkSources.EventsStories}
                    value={['Events & stories']}
                  />
                </tr>
              </thead>
              <tbody>
                {treePerks.map(
                  (
                    { perk, crewMembers, entourage, eventsStories, equipment },
                    idx
                  ) => (
                    <tr key={`${perk}-${idx}`}>
                      <td>{perk}</td>
                      <SourceRow
                        source={PerkSources.CrewMembers}
                        value={crewMembers}
                      />
                      <SourceRow
                        source={PerkSources.Equipment}
                        value={equipment}
                      />
                      <SourceRow
                        source={PerkSources.Entourage}
                        value={entourage}
                      />
                      <SourceRow
                        source={PerkSources.EventsStories}
                        value={eventsStories}
                      />
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        ))}
    </div>
  );
};
