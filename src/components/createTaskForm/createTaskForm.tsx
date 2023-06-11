import { FC, ReactElement } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { TaskTitleField } from './_taskTitleField';
import { TaskDescriptionField } from './_taskDescriptionField';
import { TaskDateField } from './_taskDateField';

export const CreateTaskForm: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography mb={2} variant="h6" component={'h2'}>
        Create A Task
      </Typography>
      <Stack spacing={2} width="100%">
        <TaskTitleField label={'Task Title'} />
        <TaskDescriptionField label={'Task Description'} />
        <TaskDateField />
      </Stack>
      {/* task date */}
      {/* task status */}
      {/* task priority */}
    </Box>
  );
};
