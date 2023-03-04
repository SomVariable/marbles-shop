import React, { FC } from 'react';
import styles from './Test.module.scss';

interface TestProps {}

const Test: FC<TestProps> = () => (
  <div className={styles.Test} data-testid="Test">
    Test Component
  </div>
);

export default Test;
