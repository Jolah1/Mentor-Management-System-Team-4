import React from "react";
import { Card, CardContent } from "@material-ui/core";
import { Box, Button, Stack } from "@mui/material";
import GeneralNotification from "../../../components/GeneralNotification";
import DiscussionNotification from "../../../components/DiscussionNotification";
import { Formik, useFormik } from "formik";

const initialValues = {
  email_post_notification: false,
  in_app_post_notification: false,
  email_program_notification: false,
  in_app_program_notification: false,
  email_task_notification: false,
  in_app_task_notification: false,
  email_approval_notification: false,
  in_app_approval_notification: false,
  email_report_notification: false,
  in_app_report_notification: false,
  email_comment_on_my_post_notification: false,
  in_app_comment_on_my_post_notification: false,
  email_comment_notification: false,
  in_app_comment_notification: false,
  email_mention_notification: false,
  in_app_mention_notification: false,
  email_direct_message_notification: false,
  in_app_direct_message_notification: false,
};

function Notifications() {
  const onSubmit = (values) => {
    console.log(values);
  };
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues,
    onSubmit,
  });
  return (
    <Card>
      <CardContent>
        <Stack direction={"column"} spacing={3} sx={{ width: "100%" }}>
          {/* Notifications settings form goes here */}
          <form onSubmit={handleSubmit}>
            <Formik initialValues={initialValues}>
              <Stack direction={"column"} spacing={6}>
                <GeneralNotification
                  values={values}
                  handleChange={handleChange}
                />
                <DiscussionNotification
                  values={values}
                  handleChange={handleChange}
                />
                <Stack
                  width={"100%"}
                  justifyContent={"space-between"}
                  direction={"row"}
                >
                  <Box width={"100%"}></Box>
                  <Button type="submit">Submit</Button>
                </Stack>
              </Stack>
            </Formik>
          </form>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default Notifications;
