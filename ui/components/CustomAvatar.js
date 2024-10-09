import React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/system';
import { useSistent } from '@sistent/react';

const StyledBadge = styled(Badge)(({ theme, color }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: color || theme.palette.success.main,
    color: color || theme.palette.success.main,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(1.8)',
      opacity: 0,
    },
  },
}));

const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  '& > *': {
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(-0.75),
  },
}));

function BadgeAvatars({ children, color }) {
  const { theme } = useSistent();

  return (
    <Root>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
        color={color}
        theme={theme}
      >
        {children}
      </StyledBadge>
    </Root>
  );
}

export default BadgeAvatars;
