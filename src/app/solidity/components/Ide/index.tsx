"use client";

import { TabContext, TabList, TabPanel as MuiTabPanel } from "@mui/lab";
import { Box, Tab, Tooltip } from "@mui/material";
import { useState } from "react";
import IdeComponent from "./IdeComponent";

const exercises = [
  {
    label: "Exercise 1",
    value: "exercise1",
  },
  {
    label: "Exercise 2",
    value: "exercise2",
  },
  {
    label: "Exercise 3",
    value: "exercise3",
  },
  {
    label: "Exercise 4",
    value: "exercise4",
  },
  {
    label: "Exercise 5",
    value: "exercise5",
  },
];

const tabListStyles = {
  borderColor: "primary.main",
  position: "center",
  borderRadius: "5px",
};

const TabPanel = ({ children, value }) => {
  return <MuiTabPanel value={value}>{children}</MuiTabPanel>;
};

const IdePage = ({ challengeName }) => {
  const [selectedExercise, setSelectedExercise] = useState<number>(0);
  const [completedExercise, setCompletedExercise] = useState<number>(0);

  return (
    <Box>
      <TabContext value={selectedExercise}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TabList
            aria-label="Exercises"
            variant="scrollable"
            scrollButtons="auto"
            sx={tabListStyles}
            TabIndicatorProps={{ style: { display: "none" } }}
          >
            {exercises.map((exercise, idx) => (
              <Tooltip
                key={idx}
                title={
                  idx === 0 ? undefined : `Complete Exercise ${idx} to unlock`
                }
                placement="top"
              >
                <Tab
                  value={idx}
                  label={exercise.label}
                  component={completedExercise < idx ? "div" : "button"}
                  onClick={
                    completedExercise < idx
                      ? undefined
                      : () => setSelectedExercise(idx)
                  }
                  sx={{
                    "&.Mui-selected": {
                      backgroundColor: "#101010",
                      borderRadius: "5px",
                      color: "white",
                      fontSize: "12px",
                      textAlign: "left",
                      opacity: 0.6,
                    },
                    borderRadius: "5px",
                    color: "#A9A9A9",
                    fontSize: "12px",
                    textAlign: "left",
                    backgroundColor: "transparent",
                    opacity: 0.4,
                  }}
                />
              </Tooltip>
            ))}
          </TabList>
        </Box>

        {/* 
        At this point, a warning is raised because the value passed to TabPanel is a number, not a string. 
        However, this is a bug in material ui, as it is an error caused by a mismatch in the value types of TabPanel and TabContext.
        I reported this issue to material ui.(https://github.com/mui/material-ui/issues/44149)
        */}
        {exercises.map((_, idx) => (
          <TabPanel key={idx} value={idx}>
            <IdeComponent
              exercise={`exercise${idx + 1}`}
              challengeName={challengeName}
              setCompletedExercise={setCompletedExercise}
            />
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
};

export default IdePage;
