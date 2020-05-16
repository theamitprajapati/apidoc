/**
 * @api {get} api/v1/registre Registration 
 * @apiName GetAuthCode
 * @apiGroup Authentication
 *
 * @apiParam {String} username  login username.
 * @apiParam {String} password  login password.
 *
 * @apiSuccessExample Success:
 *    {
 *   "status": 1,
 *   "message": "Success",
 *   "data": {
 *       "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzhlM2Y5NDFhZjkzYjMzOTJlNDMwZWRkYTI3YmY1OGYwNjM2NjQ2YTdkYWJjY2QxYWU3YTY3MGRiZThhYTQ3Y2YxM2IyN2Q5ZjUxNDkwOGYiLCJpYXQiOjE1ODk1NTUzMzIsIm5iZiI6MTU4OTU1NTMzMiwiZXhwIjoxNjIxMDkxMzMyLCJzdWIiOiIyMCIsInNjb3BlcyI6W119.dKblfwdnCIS7zM82-BqOwrUplp7jYzAY9Bdjb-ZwuxSRGNwQVoA50i0ovNu0LRQnKQfdFMJWhGozJa18GvAzQkwmivCzuZ3_FoY0fa1sJwOtSgrfgOm5flzuMob80D-3XZIbFP7LEorgC_2efm4sZ-aKUomnNKZUFZuUseNQZuPdIDOQtRmNYdxHIJ9Cnf17gPqANpCarTORCBAgcn4qVWSuUe0G1BYfFGuRKMGP9Qj-Nm_b99r53dfGiNwujgmdDQt27Be3SjWBd3MBt4LgbqzShxZ_dSMPdIIpnOX92kbvtMBPWSFAtmaAn5reYAmwR2KHO760oSW_qASGmIhgBVntD9Fje4x7PZxfttKOB_LwElSrfTfTHE_5NkDY72yA5wCK64C2vNHL_jeB8bdj5YqpPdQc45z8eQ7n1968P3TwIQuHe-SFQxUwtBe7decK4bLqhdYCLBIzMP0PErtqm97bLtD4_1XPCA2AyUJpK5HRuSSl5JcgCKaOulG-9yLVafF1H0YLvwjqsKIGc1kpYH24SrBsduseWsjF0qa2hzE1JUtNEWHPgK9l4lsb9LVbhqqTdmnryx7OK2908YEY50g80P6ycjSDKgKVzQ4qyUza1Ta3ZhyD8iSRVxT-TPZIDV_W7LoZ-_9xznodjkJ_O-oyLraTm3_jKivY4o5EEcQ",
 *    }
 *   }
 * @apiSuccess {String} status Type of response meanse 0 for failed 1 for success.
 * @apiSuccess {String} message  response message.
 * @apiSuccess {String} data  Response data.
 * @apiError {String} status  Response Type.
 * @apiError {String} message  Request message.
 * @apiError {String} data response results.
 *
 * @apiErrorExample Error:
 *     
 *     {
 *   	"status": 0,
 *   	"message": "Invalid Username or Password",
 *   	"data": "Not Found"
 *		}
 */
 
 
 /**
 * @api {get} api/v1/login Login 
 * @apiName GetLogin
 * @apiGroup Authentication
 *
 * @apiParam {String} username  login username.
 * @apiParam {String} password  login password.
 *
 * @apiSuccessExample Success:
 *    {
 *   "status": 1,
 *   "message": "Success",
 *   "data": {
 *       "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzhlM2Y5NDFhZjkzYjMzOTJlNDMwZWRkYTI3YmY1OGYwNjM2NjQ2YTdkYWJjY2QxYWU3YTY3MGRiZThhYTQ3Y2YxM2IyN2Q5ZjUxNDkwOGYiLCJpYXQiOjE1ODk1NTUzMzIsIm5iZiI6MTU4OTU1NTMzMiwiZXhwIjoxNjIxMDkxMzMyLCJzdWIiOiIyMCIsInNjb3BlcyI6W119.dKblfwdnCIS7zM82-BqOwrUplp7jYzAY9Bdjb-ZwuxSRGNwQVoA50i0ovNu0LRQnKQfdFMJWhGozJa18GvAzQkwmivCzuZ3_FoY0fa1sJwOtSgrfgOm5flzuMob80D-3XZIbFP7LEorgC_2efm4sZ-aKUomnNKZUFZuUseNQZuPdIDOQtRmNYdxHIJ9Cnf17gPqANpCarTORCBAgcn4qVWSuUe0G1BYfFGuRKMGP9Qj-Nm_b99r53dfGiNwujgmdDQt27Be3SjWBd3MBt4LgbqzShxZ_dSMPdIIpnOX92kbvtMBPWSFAtmaAn5reYAmwR2KHO760oSW_qASGmIhgBVntD9Fje4x7PZxfttKOB_LwElSrfTfTHE_5NkDY72yA5wCK64C2vNHL_jeB8bdj5YqpPdQc45z8eQ7n1968P3TwIQuHe-SFQxUwtBe7decK4bLqhdYCLBIzMP0PErtqm97bLtD4_1XPCA2AyUJpK5HRuSSl5JcgCKaOulG-9yLVafF1H0YLvwjqsKIGc1kpYH24SrBsduseWsjF0qa2hzE1JUtNEWHPgK9l4lsb9LVbhqqTdmnryx7OK2908YEY50g80P6ycjSDKgKVzQ4qyUza1Ta3ZhyD8iSRVxT-TPZIDV_W7LoZ-_9xznodjkJ_O-oyLraTm3_jKivY4o5EEcQ",
 *       "profile": {
 *           "id": 20,
 *           "name": "Akanksha Srivastava",
 *           "email": "akanksha.srivastava@margsoftware.com",
 *           "email_verified_at": null,
 *           "created_at": "2020-05-13T11:37:25.000000Z",
 *           "updated_at": "2020-05-13T11:37:25.000000Z",
 *           "mobile": "6896584569",
 *           "username": "akanksha"
 *       }
 *    }
 *   }
 * @apiSuccess {String} status Type of response meanse 0 for failed 1 for success.
 * @apiSuccess {String} message  response message.
 * @apiSuccess {String} data  Response data.
 * @apiError {String} status  Response Type.
 * @apiError {String} message  Request message.
 * @apiError {String} data response results.
 *
 * @apiErrorExample Error:
 *     
 *     {
 *   	"status": 0,
 *   	"message": "Invalid Username or Password",
 *   	"data": "Not Found"
 *		}
 */