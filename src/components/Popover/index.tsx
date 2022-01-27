import { useState } from 'react';

import { styled, keyframes } from '@stitches/react';
import { greenDark, blackA } from '@radix-ui/colors';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import * as PopoverPrimitive from '@radix-ui/react-popover';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});
const StyledContent = styled(PopoverPrimitive.Content, {
  borderRadius: 4,
  padding: 20,
  width: 260,
  backgroundColor: 'white',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

const StyledArrow = styled(PopoverPrimitive.Arrow, {
  fill: 'white',
});

const StyledClose = styled(PopoverPrimitive.Close, {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: greenDark.green11,
  position: 'absolute',
  top: 5,
  right: 5,

  '&:hover': { backgroundColor: greenDark.green4 },
});

// Exports
export const PopoverModal = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverContent = StyledContent;
export const PopoverArrow = StyledArrow;
export const PopoverClose = StyledClose;

// Your app...
const Flex = styled('div', { display: 'flex' });

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 6,
  color: '#000',
  backgroundColor: 'white',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&:hover': { backgroundColor: greenDark.green3, color: '#fff' },
});
const Fieldset = styled('fieldset', {
  all: 'unset',
  display: 'flex',
  gap: 20,
  alignItems: 'center',
});

const Button = styled('button', {
  variants: {
    search: {
      search: {
        width: '100%',
        height: 32,
        border: 0,
        borderRadius: 12,
        backgroundColor: '#035200',
        color: '#fff',
      },
      clear: {
        width: '100%',
        height: 32,
        border: 0,
        borderRadius: 12,
        backgroundColor: '#f87f0e',
        color: '#fff',
      },
    },
  },
});

export interface IHandleSearch {
  name: string;
  search: string;
}

type IPopoverProps = {
  name: string;
  researched?: string;
  option?: string[];
  handleSearch(data: IHandleSearch): void;
};

export const Popover = ({
  handleSearch,
  name,
  researched,
  option,
}: IPopoverProps) => {
  const [input, setInput] = useState<string>('');

  return (
    <PopoverModal>
      <PopoverTrigger asChild>
        <IconButton aria-label="Pesquisa por item">
          <MagnifyingGlassIcon />
        </IconButton>
      </PopoverTrigger>
      <PopoverContent sideOffset={5}>
        <Flex css={{ flexDirection: 'column', gap: 10 }}>
          <Fieldset css={{ marginTop: 8 }}>
            {option ? (
              <select
                style={{ width: '100%', height: 25 }}
                defaultValue={researched}
                onChange={event => setInput(event.target.value)}
              >
                <option value="">...</option>
                {option.map((item, index) => (
                  <option key={String(index)} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                style={{ width: '100%', height: 25 }}
                defaultValue={researched}
                onChange={event => setInput(event.target.value)}
              />
            )}
          </Fieldset>
          <Fieldset>
            <Button
              type="button"
              search="clear"
              onClick={() => handleSearch({ name, search: '' })}
            >
              Limpar
            </Button>
            <Button
              type="button"
              search="search"
              onClick={() => handleSearch({ name, search: input })}
            >
              Pesquisar
            </Button>
          </Fieldset>
        </Flex>
        <PopoverArrow />
      </PopoverContent>
    </PopoverModal>
  );
};
