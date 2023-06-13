import { FC, ReactElement } from 'react';
import {
  Box,
  Button,
  FormControlLabel,
  Switch,
} from '@mui/material';
import { ITaskFooter } from './interfaces/ITaskFooter';
import propTypes from 'prop-types';
import { Status } from '../createTaskForm/enums/Status';

export const TaskFooter: FC<ITaskFooter> = (
  props,
): ReactElement => {
  const {
    id,
    status = '',
    onClick = (e) => {
      console.log(e);
    },
    onSatatusChange = (e) => {
      console.log(e);
    },
  } = props;

  console.log("status", status);
  

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      mt={4}
    >
      <FormControlLabel
        label={'In Progress'}
        control={
          <Switch
            color="warning"
            onChange={(e) => {
              onSatatusChange(e);
            }}
            defaultChecked={status === Status.IN_PROGRESS}
          />
        }
      />
      <Button
        variant={'contained'}
        color={'success'}
        size={'small'}
        sx={{
          color: 'white',
        }}
        onClick={(e) => {
          onClick(e);
        }}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

TaskFooter.propTypes = {
  id: propTypes.number.isRequired,
  status: propTypes.string,
  onClick: propTypes.func,
  onSatatusChange: propTypes.func,
};
