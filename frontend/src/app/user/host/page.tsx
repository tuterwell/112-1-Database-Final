'use client';
import { useState, useEffect } from 'react';

import Container from '@/components/Container';
import Card from '@/components/cards/Card';

import useActivity from '@/hooks/useActivity';
import { useMember } from '@/hooks/useMember';
import type { CardData } from '@/lib/shared_types';

export default function Page() {
  const [hostActivities, setHostActivities] = useState<CardData[]>([]);
  const { getHostedActivity } = useActivity();
  const { follow_activity } = useMember();
  useEffect(() => {
    const fetchData = async () => {
      const followedData = await getHostedActivity();
      setHostActivities(followedData);
    };
    fetchData();
  }, [getHostedActivity]);

  return (
    <main className="min-h-full bg-gray-100">
      <div className=" mx-auto xl:px-20 md:px-10 sm:px-2s px-4 pt-10 text-lg lg:text-2xl font-semibold">
        我主持的活動
      </div>
      <Container>
        {hostActivities && hostActivities.length > 0 ? (
          <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {hostActivities.map((card) => (
              <Card
                key={card.activity_id}
                data={card}
                follow={follow_activity.some((item) => item.activity_id === card.activity_id)}
              />
            ))}
          </div>
        ) : (
          <div className="pt-10 text-sm lg:text-lg font-semibold">目前沒有主持的活動</div>
        )}
      </Container>
    </main>
  );
}
