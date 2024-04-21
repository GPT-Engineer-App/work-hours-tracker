import { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, List, ListItem, Text, VStack } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [jobs, setJobs] = useState([]);
  const [jobName, setJobName] = useState("");
  const [hours, setHours] = useState("");

  const handleAddJob = () => {
    if (jobName && hours) {
      const newJob = { id: Date.now(), name: jobName, hours: Number(hours) };
      setJobs([...jobs, newJob]);
      setJobName("");
      setHours("");
    }
  };

  const handleDeleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Work Hours Tracker
        </Heading>
        <FormControl>
          <FormLabel>Job Name</FormLabel>
          <Input placeholder="Enter job name" value={jobName} onChange={(e) => setJobName(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Hours Worked</FormLabel>
          <Input placeholder="Enter hours worked" type="number" value={hours} onChange={(e) => setHours(e.target.value)} />
        </FormControl>
        <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={handleAddJob}>
          Add Job
        </Button>
        <Box w="full">
          <List spacing={4}>
            {jobs.map((job) => (
              <ListItem key={job.id} p={4} boxShadow="md" borderRadius="md" bg="gray.100">
                <Flex justify="space-between" align="center">
                  <Text fontWeight="bold">{job.name}</Text>
                  <Text>{job.hours} hours</Text>
                  <Button size="sm" colorScheme="red" onClick={() => handleDeleteJob(job.id)}>
                    <FaTrash />
                  </Button>
                </Flex>
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
