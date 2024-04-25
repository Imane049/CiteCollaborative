import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.scss';
import classes from './Component.module.scss';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 29:442 */
export const Component: FC<Props> = memo(function Component(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle40}></div>
      <div className={classes.opciones}>Opciones</div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
    </div>
  );
});
