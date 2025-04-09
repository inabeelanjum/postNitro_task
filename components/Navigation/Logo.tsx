'use client';

import Image from 'next/image';
import { Box } from '@mantine/core';

const Logo = () => {
  return (
    <Box className="logoWrapper">
      <Image
        src="/logo-full.svg"
        alt="PostNitro"
        width={131}
        height={27}
        priority
      />
    </Box>
  );
};

export default Logo; 