import React, { FC } from 'react';
import { useGetMoveByIdQuery } from '../Slices/pokemonSlice';

type MoveDescriptionProps = {
  id: number;
}
const MoveDescription: FC<MoveDescriptionProps> = ({ id }) => {
  const { data } = useGetMoveByIdQuery(id);
  return (
    <div>
      <h1>
        Move ID:
        {data && data.id}
      </h1>
      <h1>
        Move Name:
        {data && data.name}
      </h1>
      <h1>
        Move Accuracy:
        {data && data.accuracy}
        %
      </h1>
      <h1>
        Move power:
        {data && data.power}
        %
      </h1>
      {data && data.effect_entries.map((entry) => (
        <div>
          <p>
            Move effect:
            {entry.effect}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MoveDescription;
