import React, { FC } from 'react';

import { formatMoney } from '@shared/lib/utils';
import { HhData } from '@shared/types/page';
import { Card, Icon, Tag, Typography } from '@shared/ui';

import styles from './styles.module.scss';

interface Props {
  vacancies: HhData;
  title: string;
  source: string;
  className?: string;
}

export const Vacancies: FC<Props> = ({
  vacancies,
  title,
  source,
  className,
}) => {
  const salaries = [
    {
      title: 'Начальный',
      salary: formatMoney(vacancies.juniorSalary),
      rateCount: 3,
      activeRate: 1,
    },
    {
      title: 'Средний',
      salary: formatMoney(vacancies.middleSalary),
      rateCount: 3,
      activeRate: 2,
    },
    {
      title: 'Профессионал',
      salary: formatMoney(vacancies.seniorSalary),
      rateCount: 3,
      activeRate: 3,
    },
  ];

  return (
    <div className={className}>
      <div className={styles.Title}>
        <Typography variant="h2">Вакансии - {title}</Typography>
        <Tag variant="Error" size="m">
          {source}
        </Tag>
      </div>
      <div className={styles.Info}>
        <Card className={styles.Count}>
          <Typography variant="caption20">Всего вакансий</Typography>
          <Typography variant="textBold36" className={styles.CountText}>
            {vacancies.count}
          </Typography>
        </Card>
        <Card className={styles.Salary}>
          {salaries.map((item) => (
            <div key={item.title} className={styles.SalaryInfo}>
              <Typography variant="caption20" className={styles.SalaryTitle}>
                {item.title}
              </Typography>
              <Typography variant="textBold26" className={styles.SalaryText}>
                {item.salary}
              </Typography>
              <div className={styles.SalaryRating}>
                {new Array(item.rateCount).fill(0).map((_, index) => (
                  <Icon
                    key={index}
                    name="Rate"
                    width={20}
                    height={20}
                    className={
                      item.activeRate > index ? styles.ActiveIcon : styles.Icon
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
};
