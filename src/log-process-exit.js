/* eslint-disable no-console */

process.on('unhandledRejection', (error) => {
  console.error({
    error: {
      message: error.message,
      stack: error.stack,
    },
  }, 'Critical unhandled promise rejection');
  process.exit(1);
});

process.on('exit', (exitcode) => {
  console.log(`Shutting down process with exitcode: ${exitcode}`);
});
