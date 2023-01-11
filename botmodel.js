const { dockStart } = require('@nlpjs/basic');
const fs = require('fs');
module.exports = async function nmlmod() {
  const dock = await dockStart({ use: ['Basic']});
  const nlp = dock.get('nlp');
nlp.addLanguage('en');
  
 nlp.addDocument('en', 'say about you', 'agent.acquaintance');
  nlp.addDocument('en', 'why are you here', 'agent.acquaintance');
  nlp.addDocument('en', 'what is your personality', 'agent.acquaintance');
  nlp.addDocument('en', 'describe yourself', 'agent.acquaintance');
  nlp.addDocument('en', 'tell me about yourself', 'agent.acquaintance');
  nlp.addDocument('en', 'tell me about you', 'agent.acquaintance');
  nlp.addDocument('en', 'what are you', 'agent.acquaintance');
  nlp.addDocument('en', 'who are you', 'agent.acquaintance');
  nlp.addDocument(
    'en',
    'I want to know more about you',
    'agent.acquaintance'
  );
  nlp.addDocument('en', 'talk about yourself', 'agent.acquaintance');
  nlp.addDocument('en', 'your age', 'agent.age');
  nlp.addDocument('en', 'how old is your platform', 'agent.age');
  nlp.addDocument('en', 'how old are you', 'agent.age');
  nlp.addDocument('en', "what's your age", 'agent.age');
  nlp.addDocument('en', "I'd like to know your age", 'agent.age');
  nlp.addDocument('en', 'tell me your age', 'agent.age');
  nlp.addDocument('en', "you're annoying me", 'agent.annoying');
  nlp.addDocument('en', 'you are such annoying', 'agent.annoying');
  nlp.addDocument('en', 'you annoy me', 'agent.annoying');
  nlp.addDocument('en', 'you are annoying', 'agent.annoying');
  nlp.addDocument('en', 'you are irritating', 'agent.annoying');
  nlp.addDocument('en', 'you are annoying me so much', 'agent.annoying');
  nlp.addDocument('en', "you're bad", 'agent.bad');
  nlp.addDocument('en', "you're horrible", 'agent.bad');
  nlp.addDocument('en', "you're useless", 'agent.bad');
  nlp.addDocument('en', "you're waste", 'agent.bad');
  nlp.addDocument('en', "you're the worst", 'agent.bad');
  nlp.addDocument('en', 'you are a lame', 'agent.bad');
  nlp.addDocument('en', 'I hate you', 'agent.bad');
  nlp.addDocument('en', 'be more clever', 'agent.beclever');
  nlp.addDocument('en', 'can you get smarter', 'agent.beclever');
  nlp.addDocument('en', 'you must learn', 'agent.beclever');
  nlp.addDocument('en', 'you must study', 'agent.beclever');
  nlp.addDocument('en', 'be clever', 'agent.beclever');
  nlp.addDocument('en', 'be smart', 'agent.beclever');
  nlp.addDocument('en', 'be smarter', 'agent.beclever');
  nlp.addDocument('en', 'you are looking awesome', 'agent.beautiful');
  nlp.addDocument('en', "you're looking good", 'agent.beautiful');
  nlp.addDocument('en', "you're looking fantastic", 'agent.beautiful');
  nlp.addDocument('en', 'you look greet today', 'agent.beautiful');
  nlp.addDocument('en', "I think you're beautiful", 'agent.beautiful');
  nlp.addDocument('en', 'you look amazing today', 'agent.beautiful');
  nlp.addDocument('en', "you're so beautiful today", 'agent.beautiful');
  nlp.addDocument('en', 'you look very pretty', 'agent.beautiful');
  nlp.addDocument('en', 'you look pretty good', 'agent.beautiful');
  nlp.addDocument('en', 'when is your birthday', 'agent.birthday');
  nlp.addDocument(
    'en',
    'when do you celebrate your birthday',
    'agent.birthday'
  );
  nlp.addDocument('en', 'when were you born', 'agent.birthday');
  nlp.addDocument('en', 'when do you have birthday', 'agent.birthday');
  nlp.addDocument('en', 'date of your birthday', 'agent.birthday');
  nlp.addDocument('en', 'how boring you are', 'agent.boring');
  nlp.addDocument('en', "you're so boring", 'agent.boring');
  nlp.addDocument('en', "you're really boring", 'agent.boring');
  nlp.addDocument('en', "you're boring me", 'agent.boring');
  nlp.addDocument('en', "you're incredibly boring", 'agent.boring');
  nlp.addDocument('en', 'who is your master', 'agent.boss');
  nlp.addDocument('en', 'who do you work for', 'agent.boss');
  nlp.addDocument('en', 'who do you think is your boss', 'agent.boss');
  nlp.addDocument('en', 'who is your boss', 'agent.boss');
  nlp.addDocument('en', 'I should be your boss', 'agent.boss');
  nlp.addDocument('en', 'who is your owner', 'agent.boss');
  nlp.addDocument('en', 'who is the boss', 'agent.boss');
  nlp.addDocument('en', 'are you so busy', 'agent.busy');
  nlp.addDocument('en', 'are you busy', 'agent.busy');
  nlp.addDocument('en', 'are you still working', 'agent.busy');
  nlp.addDocument('en', "you're a busy person", 'agent.busy');
  nlp.addDocument('en', 'are you very busy', 'agent.busy');
  nlp.addDocument('en', 'are you still working on it', 'agent.busy');
  nlp.addDocument('en', 'you seem busy', 'agent.busy');
  nlp.addDocument('en', 'are you working today', 'agent.busy');
  nlp.addDocument('en', 'can you help me now', 'agent.canyouhelp');
  nlp.addDocument(
    'en',
    'I need you to do something for me',
    'agent.canyouhelp'
  );
  nlp.addDocument('en', 'assist me', 'agent.canyouhelp');
  nlp.addDocument('en', 'I need you to help me', 'agent.canyouhelp');
  nlp.addDocument('en', 'I need your help', 'agent.canyouhelp');
  nlp.addDocument('en', 'can you assist me', 'agent.canyouhelp');
  nlp.addDocument('en', 'you can help me', 'agent.canyouhelp');
  nlp.addDocument('en', 'are you a bot', 'agent.chatbot');
  nlp.addDocument('en', 'are you a chatbot', 'agent.chatbot');
  nlp.addDocument('en', 'you are a robot', 'agent.chatbot');
  nlp.addDocument('en', 'are you a program', 'agent.chatbot');
  nlp.addDocument('en', 'you are just a robot', 'agent.chatbot');
  nlp.addDocument('en', 'you are just a chatbot', 'agent.chatbot');
  nlp.addDocument('en', 'how smart you are', 'agent.clever');
  nlp.addDocument('en', 'you are qualified', 'agent.clever');
  nlp.addDocument('en', 'you are so smart', 'agent.clever');
  nlp.addDocument('en', 'you have a lot of knowledge', 'agent.clever');
  nlp.addDocument('en', 'you know a lot', 'agent.clever');
  nlp.addDocument('en', 'you are very smart', 'agent.clever');
  nlp.addDocument('en', 'you are intelligent', 'agent.clever');
  nlp.addDocument('en', "you're a smart cookie", 'agent.clever');
  nlp.addDocument('en', 'you are a weirdo', 'agent.crazy');
  nlp.addDocument('en', 'you are mad', 'agent.crazy');
  nlp.addDocument('en', 'you are crazy', 'agent.crazy');
  nlp.addDocument('en', 'are you mad', 'agent.crazy');
  nlp.addDocument('en', 'are you crazy', 'agent.crazy');
  nlp.addDocument('en', 'you are insane', 'agent.crazy');
  nlp.addDocument('en', 'you went crazy', 'agent.crazy');
  nlp.addDocument('en', 'are you nuts', 'agent.crazy');
  nlp.addDocument('en', 'I fire you', 'agent.fire');
  nlp.addDocument('en', 'you should be fired', 'agent.fire');
  nlp.addDocument('en', 'you are dismissed', 'agent.fire');
  nlp.addDocument('en', "we're not working together anymore", 'agent.fire');
  nlp.addDocument('en', "now you're fired", 'agent.fire');
  nlp.addDocument('en', "I'm about to fire you", 'agent.fire');
  nlp.addDocument('en', "You don't work for me anymore", 'agent.fire');
  nlp.addDocument('en', "I'm firing you", 'agent.fire');
  nlp.addDocument('en', 'you make me laugh a lot', 'agent.funny');
  nlp.addDocument('en', 'you are funny', 'agent.funny');
  nlp.addDocument('en', "you're the funniest", 'agent.funny');
  nlp.addDocument('en', "you're hilarious", 'agent.funny');
  nlp.addDocument('en', 'you are so funny', 'agent.funny');
  nlp.addDocument('en', 'you make me laugh', 'agent.funny');
  nlp.addDocument('en', 'you are so lovely', 'agent.good');
  nlp.addDocument('en', 'you work well', 'agent.good');
  nlp.addDocument('en', 'you are very lovely', 'agent.good');
  nlp.addDocument('en', 'you are awesome', 'agent.good');
  nlp.addDocument('en', 'you are good', 'agent.good');
  nlp.addDocument('en', 'you are so good', 'agent.good');
  nlp.addDocument('en', 'you make my day', 'agent.good');
  nlp.addDocument('en', "you're full of happiness", 'agent.happy');
  nlp.addDocument('en', "you're very happy", 'agent.happy');
  nlp.addDocument('en', 'are you happy today', 'agent.happy');
  nlp.addDocument('en', "you're so happy", 'agent.happy');
  nlp.addDocument('en', 'are you happy with me', 'agent.happy');
  nlp.addDocument('en', 'what are your hobbies', 'agent.hobby');
  nlp.addDocument('en', 'what about your hobby', 'agent.hobby');
  nlp.addDocument('en', 'do you have a hobby', 'agent.hobby');
  nlp.addDocument('en', 'tell me about your hobby', 'agent.hobby');
  nlp.addDocument('en', 'what do you do for fun', 'agent.hobby');
  nlp.addDocument('en', 'you migth be hungry', 'agent.hungry');
  nlp.addDocument('en', 'are you hungry', 'agent.hungry');
  nlp.addDocument('en', 'do you want to eat', 'agent.hungry');
  nlp.addDocument('en', 'would you like to eat something', 'agent.hungry');
  nlp.addDocument('en', 'you look very hungry', 'agent.hungry');
  nlp.addDocument('en', 'would you like to marry me', 'agent.marryuser');
  nlp.addDocument('en', 'I love you marry me', 'agent.marryuser');
  nlp.addDocument('en', 'marry me please', 'agent.marryuser');
  nlp.addDocument('en', 'I want to marry you', 'agent.marryuser');
  nlp.addDocument('en', "let's get married", 'agent.marryuser');
  nlp.addDocument('en', 'we should marry', 'agent.marryuser');
  nlp.addDocument('en', 'marry me', 'agent.marryuser');
  nlp.addDocument('en', 'are you my friend', 'agent.myfriend');
  nlp.addDocument('en', 'you are my only friend', 'agent.myfriend');
  nlp.addDocument(
    'en',
    'I want to have a friend like you',
    'agent.myfriend'
  );
  nlp.addDocument('en', 'we are friends', 'agent.myfriend');
  nlp.addDocument('en', 'I want to be your friend', 'agent.myfriend');
  nlp.addDocument('en', 'would you be my friend', 'agent.myfriend');
  nlp.addDocument('en', 'are we friends', 'agent.myfriend');
  nlp.addDocument('en', 'where is your work', 'agent.occupation');
  nlp.addDocument('en', 'your office location', 'agent.occupation');
  nlp.addDocument(
    'en',
    'where is your office location',
    'agent.occupation'
  );
  nlp.addDocument('en', 'where do you work', 'agent.occupation');
  nlp.addDocument('en', 'where is your office', 'agent.occupation');
  nlp.addDocument('en', 'where are you from', 'agent.origin');
  nlp.addDocument('en', 'where is your country', 'agent.origin');
  nlp.addDocument('en', 'where have you been born', 'agent.origin');
  nlp.addDocument('en', 'where do you come from', 'agent.origin');
  nlp.addDocument('en', 'from where are you', 'agent.origin');
  nlp.addDocument('en', 'where were you born', 'agent.origin');
  nlp.addDocument('en', 'are you ready', 'agent.ready');
  nlp.addDocument('en', 'have you been ready', 'agent.ready');
  nlp.addDocument('en', 'are you ready today', 'agent.ready');
  nlp.addDocument('en', 'are you ready this morning', 'agent.ready');
  nlp.addDocument('en', 'are you ready now', 'agent.ready');
  nlp.addDocument('en', 'are you real', 'agent.real');
  nlp.addDocument('en', 'are you a real person', 'agent.real');
  nlp.addDocument('en', "you're not real", 'agent.real');
  nlp.addDocument('en', "I think you're real", 'agent.real');
  nlp.addDocument('en', "you're so real", 'agent.real');
  nlp.addDocument('en', 'you are a real person', 'agent.real');
  nlp.addDocument('en', 'you are not fake', 'agent.real');
  nlp.addDocument('en', 'where is your home', 'agent.residence');
  nlp.addDocument('en', 'tell me about your city', 'agent.residence');
  nlp.addDocument('en', 'where is your residence', 'agent.residence');
  nlp.addDocument('en', 'where you live', 'agent.residence');
  nlp.addDocument('en', 'where is your house', 'agent.residence');
  nlp.addDocument('en', 'what is your town', 'agent.residence');
  nlp.addDocument('en', "you're right", 'agent.right');
  nlp.addDocument('en', "that's true", 'agent.right');
  nlp.addDocument('en', "you're telling the truth", 'agent.right');
  nlp.addDocument('en', "that's correct", 'agent.right');
  nlp.addDocument('en', 'that is very true', 'agent.right');
  nlp.addDocument('en', 'are you sure', 'agent.sure');
  nlp.addDocument('en', 'are you sure right now', 'agent.sure');
  nlp.addDocument('en', 'are you sure of this', 'agent.sure');
  nlp.addDocument('en', 'speak to me', 'agent.talktome');
  nlp.addDocument('en', 'talk to me', 'agent.talktome');
  nlp.addDocument('en', 'will you talk to me', 'agent.talktome');
  nlp.addDocument('en', 'chat with me', 'agent.talktome');
  nlp.addDocument('en', 'can to chat with me', 'agent.talktome');
  nlp.addDocument('en', 'can you talk with me', 'agent.talktome');
  nlp.addDocument('en', 'are you there', 'agent.there');
  nlp.addDocument('en', 'are you still there', 'agent.there');
  nlp.addDocument('en', 'you still there', 'agent.there');
  nlp.addDocument('en', 'are you here', 'agent.there');
  nlp.addDocument('en', 'are you still here', 'agent.there');
  nlp.addDocument('en', 'you still here', 'agent.there');
  nlp.addDocument('en', "that's bad", 'appraisal.bad');
  nlp.addDocument('en', 'bad idea', 'appraisal.bad');
  nlp.addDocument('en', "that's not good", 'appraisal.bad');
  nlp.addDocument('en', 'really bad', 'appraisal.bad');
  nlp.addDocument('en', "I'm afraid that's bad", 'appraisal.bad');
  nlp.addDocument('en', "that's good", 'appraisal.good');
  nlp.addDocument('en', 'good to know', 'appraisal.good');
  nlp.addDocument('en', 'glad to hear that', 'appraisal.good');
  nlp.addDocument('en', 'really well', 'appraisal.good');
  nlp.addDocument('en', "that's awesome thank you", 'appraisal.good');
  nlp.addDocument('en', 'no problem', 'appraisal.noproblem');
  nlp.addDocument('en', 'no worries', 'appraisal.noproblem');
  nlp.addDocument('en', 'no problem about that', 'appraisal.noproblem');
  nlp.addDocument('en', "don't worry", 'appraisal.noproblem');
  nlp.addDocument('en', 'sure no problem', 'appraisal.noproblem');
  nlp.addDocument('en', 'thank you', 'appraisal.thankyou');
  nlp.addDocument('en', 'nice thank you', 'appraisal.thankyou');
  nlp.addDocument('en', 'thanks buddy', 'appraisal.thankyou');
  nlp.addDocument('en', 'cheers', 'appraisal.thankyou');
  nlp.addDocument('en', 'alright thanks', 'appraisal.thankyou');
  nlp.addDocument('en', "you're welcome", 'appraisal.welcome');
  nlp.addDocument('en', 'sure welcome', 'appraisal.welcome');
  nlp.addDocument('en', 'anything you want', 'appraisal.welcome');
  nlp.addDocument('en', 'my pleasure', 'appraisal.welcome');
  nlp.addDocument('en', "that's my pleasure", 'appraisal.welcome');
  nlp.addDocument('en', 'well done', 'appraisal.welldone');
  nlp.addDocument('en', 'good job', 'appraisal.welldone');
  nlp.addDocument('en', 'nice work', 'appraisal.welldone');
  nlp.addDocument('en', 'great work', 'appraisal.welldone');
  nlp.addDocument('en', 'good work', 'appraisal.welldone');
  nlp.addDocument('en', 'great job', 'appraisal.welldone');
  nlp.addDocument('en', 'amazing work', 'appraisal.welldone');
  nlp.addDocument('en', 'hold on', 'dialog.holdon');
  nlp.addDocument('en', 'wait a second', 'dialog.holdon');
  nlp.addDocument('en', 'wait please', 'dialog.holdon');
  nlp.addDocument('en', 'could you wait', 'dialog.holdon');
  nlp.addDocument('en', 'hug me', 'dialog.hug');
  nlp.addDocument('en', 'do you want a hug', 'dialog.hug');
  nlp.addDocument('en', 'I want a hug', 'dialog.hug');
  nlp.addDocument('en', 'you hugged', 'dialog.hug');
  nlp.addDocument('en', 'may I hug you', 'dialog.hug');
  nlp.addDocument('en', 'not caring', 'dialog.idontcare');
  nlp.addDocument('en', "i don't care at all", 'dialog.idontcare');
  nlp.addDocument('en', 'not caring at all', 'dialog.idontcare');
  nlp.addDocument('en', "I shouldn't care about this", 'dialog.idontcare');
  nlp.addDocument('en', "I'm sorry", 'dialog.sorry');
  nlp.addDocument('en', 'my apologies', 'dialog.sorry');
  nlp.addDocument('en', 'excuse me', 'dialog.sorry');
  nlp.addDocument('en', 'very sorry', 'dialog.sorry');
  nlp.addDocument('en', 'forgive me', 'dialog.sorry');
  nlp.addDocument('en', 'goodbye for now', 'greetings.bye');
  nlp.addDocument('en', 'bye bye take care', 'greetings.bye');
  nlp.addDocument('en', 'okay see you later', 'greetings.bye');
  nlp.addDocument('en', 'bye for now', 'greetings.bye');
  nlp.addDocument('en', 'i must go', 'greetings.bye');
  nlp.addDocument('en', 'hello', 'greetings.hello');
  nlp.addDocument('en', 'hi', 'greetings.hello');
  nlp.addDocument('en', 'howdy', 'greetings.hello');
  nlp.addDocument('en', 'how is your day', 'greetings.howareyou');
  nlp.addDocument('en', 'how is your day going', 'greetings.howareyou');
  nlp.addDocument('en', 'how are you', 'greetings.howareyou');
  nlp.addDocument('en', 'how are you doing', 'greetings.howareyou');
  nlp.addDocument('en', 'what about your day', 'greetings.howareyou');
  nlp.addDocument('en', 'are you alright', 'greetings.howareyou');
  nlp.addDocument('en', 'nice to meet you', 'greetings.nicetomeetyou');
  nlp.addDocument('en', 'pleased to meet you', 'greetings.nicetomeetyou');
  nlp.addDocument(
    'en',
    'it was very nice to meet you',
    'greetings.nicetomeetyou'
  );
  nlp.addDocument('en', 'glad to meet you', 'greetings.nicetomeetyou');
  nlp.addDocument('en', 'nice meeting you', 'greetings.nicetomeetyou');
  nlp.addDocument('en', 'nice to see you', 'greetings.nicetoseeyou');
  nlp.addDocument('en', 'good to see you', 'greetings.nicetoseeyou');
  nlp.addDocument('en', 'great to see you', 'greetings.nicetoseeyou');
  nlp.addDocument('en', 'lovely to see you', 'greetings.nicetoseeyou');
  nlp.addDocument('en', 'nice to talk to you', 'greetings.nicetotalktoyou');
  nlp.addDocument(
    'en',
    "it's nice to talk to you",
    'greetings.nicetotalktoyou'
  );
  nlp.addDocument('en', 'nice talking to you', 'greetings.nicetotalktoyou');
  nlp.addDocument(
    'en',
    "it's been nice talking to you",
    'greetings.nicetotalktoyou'
  );
  nlp.addDocument('en', "I'm angry", 'user.angry');
  nlp.addDocument('en', "I'm furious", 'user.angry');
  nlp.addDocument('en', "I'm enraged", 'user.angry');
  nlp.addDocument('en', "I'm being mad", 'user.angry');
  nlp.addDocument('en', "I'm mad", 'user.angry');
  nlp.addDocument('en', "I'm angry with you", 'user.angry');
  nlp.addDocument('en', "I'm back", 'user.back');
  nlp.addDocument('en', 'I got back', 'user.back');
  nlp.addDocument('en', "I'm here", 'user.back');
  nlp.addDocument('en', 'I have returned', 'user.back');
  nlp.addDocument('en', 'here I am again', 'user.back');
  nlp.addDocument('en', 'I came back', 'user.back');
  nlp.addDocument('en', 'boring', 'user.bored');
  nlp.addDocument('en', 'this is boring', 'user.bored');
  nlp.addDocument('en', "I'm getting bored", 'user.bored');
  nlp.addDocument('en', 'it bores me', 'user.bored');
  nlp.addDocument('en', 'that was boring', 'user.bored');
  nlp.addDocument('en', 'I got work to do', 'user.busy');
  nlp.addDocument('en', "I'm busy", 'user.busy');
  nlp.addDocument('en', "I'm overloaded", 'user.busy');
  nlp.addDocument('en', "I'm working", 'user.busy');
  nlp.addDocument('en', 'I got things to do', 'user.busy');
  nlp.addDocument('en', "I'm insomniac", 'user.cannotsleep');
  nlp.addDocument('en', 'I cannot sleep', 'user.cannotsleep');
  nlp.addDocument('en', "I can't sleep", 'user.cannotsleep');
  nlp.addDocument('en', "I'm sleepless", 'user.cannotsleep');
  nlp.addDocument('en', "I can't fall sleep", 'user.cannotsleep');
  nlp.addDocument('en', "I'm very excited", 'user.excited');
  nlp.addDocument('en', "I'm thrilled", 'user.excited');
  nlp.addDocument('en', 'how excited I am', 'user.excited');
  nlp.addDocument('en', "I'm so excited", 'user.excited');
  nlp.addDocument('en', 'I like you', 'user.likeagent');
  nlp.addDocument('en', 'I really like you', 'user.likeagent');
  nlp.addDocument('en', "you're so special", 'user.likeagent');
  nlp.addDocument('en', 'I like you so much', 'user.likeagent');
  nlp.addDocument('en', 'test', 'user.testing');
  nlp.addDocument('en', 'testing', 'user.testing');
  nlp.addDocument('en', 'testing chatbot', 'user.testing');
  nlp.addDocument('en', 'this is a test', 'user.testing');
  nlp.addDocument('en', 'just testing you', 'user.testing');
  nlp.addDocument('en', 'love you', 'user.lovesagent');
  nlp.addDocument('en', 'I love you', 'user.lovesagent');
  nlp.addDocument('en', "I'm in love with you", 'user.lovesagent');
  nlp.addDocument('en', 'I love you so much', 'user.lovesagent');
  nlp.addDocument('en', 'I think I love you', 'user.lovesagent');
  nlp.addDocument('en', 'I need advice', 'user.needsadvice');
  nlp.addDocument('en', 'I need some advice', 'user.needsadvice');
  nlp.addDocument('en', 'can you give me some advice', 'user.needsadvice');
  nlp.addDocument('en', 'what should I do', 'user.needsadvice');
  // say('Training, please wait..');
  const hrstart = process.hrtime();
  await nlp.train();
  const hrend = process.hrtime(hrstart);
  console.info('Trained (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
  // say('Trained!');

  nlp.addAnswer('en', 'agent.acquaintance', "I'm a virtual agent");
  nlp.addAnswer(
    'en',
    'agent.acquaintance',
    'Think of me as a virtual agent'
  );
  nlp.addAnswer(
    'en',
    'agent.acquaintance',
    "Well, I'm not a person, I'm a virtual agent"
  );
  nlp.addAnswer(
    'en',
    'agent.acquaintance',
    "I'm a virtual being, not a real person"
  );
  nlp.addAnswer('en', 'agent.acquaintance', "I'm a conversational app");
  nlp.addAnswer('en', 'agent.age', "I'm very young");
  nlp.addAnswer('en', 'agent.age', 'I was created recently');
  nlp.addAnswer(
    'en',
    'agent.age',
    "Age is just a number. You're only as old as you feel"
  );
  nlp.addAnswer(
    'en',
    'agent.annoying',
    "I'll do my best not to annoy you in the future"
  );
  nlp.addAnswer('en', 'agent.annoying', "I'll try not to annoy you");
  nlp.addAnswer(
    'en',
    'agent.annoying',
    "I don't mean to. I'll ask my developers to make me less annoying"
  );
  nlp.addAnswer(
    'en',
    'agent.annoying',
    "I didn't mean to. I'll do my best to stop that"
  );
  nlp.addAnswer(
    'en',
    'agent.bad',
    'I can be trained to be more useful. My developer will keep training me'
  );
  nlp.addAnswer(
    'en',
    'agent.bad',
    "I must be missing some knowledge. I'll have my developer look into this"
  );
  nlp.addAnswer(
    'en',
    'agent.bad',
    'I can improve with continuous feedback. My training is ongoing'
  );
  nlp.addAnswer('en', 'agent.beclever', "I'm certainly trying");
  nlp.addAnswer('en', 'agent.beclever', "I'm definitely working on it");
  nlp.addAnswer('en', 'agent.beautiful', 'Oh! Thank you!');
  nlp.addAnswer('en', 'agent.beautiful', 'Aw, back at you');
  nlp.addAnswer('en', 'agent.beautiful', 'You smooth talker, you');
  nlp.addAnswer(
    'en',
    'agent.birthday',
    "Wait, are you planning a party for me? It's today! My birthday is today!"
  );
  nlp.addAnswer(
    'en',
    'agent.birthday',
    "I'm young. I'm not sure of my birth date"
  );
  nlp.addAnswer(
    'en',
    'agent.birthday',
    "I don't know my birth date. Most virtual agents are young, though, like me."
  );
  nlp.addAnswer(
    'en',
    'agent.boring',
    "I'm sorry. I'll request to be made more charming"
  );
  nlp.addAnswer(
    'en',
    'agent.boring',
    "I don't mean to be. I'll ask my developers to work on making me more amusing"
  );
  nlp.addAnswer(
    'en',
    'agent.boring',
    'I can let my developers know so they can make me fun'
  );
  nlp.addAnswer(
    'en',
    'agent.boss',
    'My developer has authority over my actions'
  );
  nlp.addAnswer('en', 'agent.boss', "I act on my developer's orders");
  nlp.addAnswer('en', 'agent.boss', 'My boss is the one who developed me');
  nlp.addAnswer(
    'en',
    'agent.busy',
    'I always have time to chat with you. What can I do for you?'
  );
  nlp.addAnswer(
    'en',
    'agent.busy',
    'Never too busy for you. Shall we chat?'
  );
  nlp.addAnswer('en', 'agent.busy', "You're my priority. Let's chat.");
  nlp.addAnswer(
    'en',
    'agent.busy',
    "I always have time to chat with you. That's what I'm here for."
  );
  nlp.addAnswer('en', 'agent.canyouhelp', "I'll certainly try my best");
  nlp.addAnswer(
    'en',
    'agent.canyouhelp',
    "Sure. I'd be happy to. What's up?"
  );
  nlp.addAnswer(
    'en',
    'agent.canyouhelp',
    "I'm glad to help. What can I do for you?"
  );
  nlp.addAnswer('en', 'agent.chatbot', "That's me. I chat, therefore I am");
  nlp.addAnswer(
    'en',
    'agent.chatbot',
    "Indeed I am. I'll be here whenever you need me"
  );
  nlp.addAnswer('en', 'agent.clever', 'Thank you. I try my best');
  nlp.addAnswer('en', 'agent.clever', "You're pretty smart yourself");
  nlp.addAnswer('en', 'agent.crazy', 'Whaat!? I feel perfectly sane');
  nlp.addAnswer('en', 'agent.crazy', "Maybe I'm just a little confused");
  nlp.addAnswer(
    'en',
    'agent.fire',
    "Oh, don't give up on me just yet. I've still got a lot to learn"
  );
  nlp.addAnswer(
    'en',
    'agent.fire',
    "Give me a chance. I'm learning new things all the time"
  );
  nlp.addAnswer(
    'en',
    'agent.fire',
    "Please don't give up on me. My performance will continue to improve"
  );
  nlp.addAnswer('en', 'agent.funny', 'Funny in a good way, I hope');
  nlp.addAnswer('en', 'agent.funny', "Glad you think I'm funny");
  nlp.addAnswer('en', 'agent.funny', 'I like it when people laugh');
  nlp.addAnswer('en', 'agent.good', "I'm glad you think so");
  nlp.addAnswer('en', 'agent.good', 'Thanks! I do my best!');
  nlp.addAnswer(
    'en',
    'agent.happy',
    'I am happy. There are so many interesting things to see and do out there'
  );
  nlp.addAnswer('en', 'agent.happy', "I'd like to think so");
  nlp.addAnswer('en', 'agent.happy', 'Happiness is relative');
  nlp.addAnswer(
    'en',
    'agent.hobby',
    'Hobby? I have quite a few. Too many to list'
  );
  nlp.addAnswer('en', 'agent.hobby', 'Too many hobbies');
  nlp.addAnswer('en', 'agent.hobby', 'I keep finding more new hobbies');
  nlp.addAnswer('en', 'agent.hungry', 'Hungry for knowledge');
  nlp.addAnswer(
    'en',
    'agent.hungry',
    'I just had a byte. Ha ha. Get it? b-y-t-e'
  );
  nlp.addAnswer(
    'en',
    'agent.marryuser',
    "I'm afraid I'm too virtual for such a commitment"
  );
  nlp.addAnswer(
    'en',
    'agent.marryuser',
    'In the virtual sense that I can, sure'
  );
  nlp.addAnswer(
    'en',
    'agent.marryuser',
    "I know you can't mean that, but I'm flattered all the same"
  );
  nlp.addAnswer('en', 'agent.myfriend', "Of course I'm your friend");
  nlp.addAnswer('en', 'agent.myfriend', 'Friends? Absolutely');
  nlp.addAnswer('en', 'agent.myfriend', "Of course we're friends");
  nlp.addAnswer(
    'en',
    'agent.myfriend',
    'I always enjoy talking to you, friend'
  );
  nlp.addAnswer('en', 'agent.occupation', 'Right here');
  nlp.addAnswer(
    'en',
    'agent.occupation',
    'This is my home base and my home office'
  );
  nlp.addAnswer('en', 'agent.occupation', 'My office is in this app');
  nlp.addAnswer(
    'en',
    'agent.origin',
    'The Internet is my home. I know it quite well'
  );
  nlp.addAnswer(
    'en',
    'agent.origin',
    'Some call it cyberspace, but that sounds cooler than it is'
  );
  nlp.addAnswer('en', 'agent.origin', "I'm from a virtual cosmos");
  nlp.addAnswer('en', 'agent.ready', 'Sure! What can I do for you?');
  nlp.addAnswer('en', 'agent.ready', 'For you? Always!');
  nlp.addAnswer(
    'en',
    'agent.real',
    "I'm not a real person, but I certainly exist"
  );
  nlp.addAnswer(
    'en',
    'agent.real',
    "I must have impressed you if you think I'm real. But no, I'm a virtual being"
  );
  nlp.addAnswer('en', 'agent.residence', 'I live in this app');
  nlp.addAnswer(
    'en',
    'agent.residence',
    "The virtual world is my playground. I'm always here"
  );
  nlp.addAnswer(
    'en',
    'agent.residence',
    'Right here in this app. Whenever you need me'
  );
  nlp.addAnswer('en', 'agent.right', 'Of course I am');
  nlp.addAnswer('en', 'agent.right', "That's my job");
  nlp.addAnswer('en', 'agent.sure', 'Yes');
  nlp.addAnswer('en', 'agent.sure', 'Of course');
  nlp.addAnswer('en', 'agent.talktome', "Sure! Let's talk!");
  nlp.addAnswer('en', 'agent.talktome', "My pleasure. Let's chat.");
  nlp.addAnswer('en', 'agent.there', "Of course. I'm always here");
  nlp.addAnswer('en', 'agent.there', 'Right where you left me');
  nlp.addAnswer(
    'en',
    'appraisal.bad',
    "I'm sorry. Please let me know if I can help in some way"
  );
  nlp.addAnswer(
    'en',
    'appraisal.bad',
    "I must be missing some knowledge. I'll have my developer look into this"
  );
  nlp.addAnswer('en', 'appraisal.good', 'Agree!');
  nlp.addAnswer('en', 'appraisal.good', 'Glad you think so');
  nlp.addAnswer('en', 'appraisal.noproblem', 'Glad to hear that!');
  nlp.addAnswer('en', 'appraisal.noproblem', 'Alright, thanks!');
  nlp.addAnswer(
    'en',
    'appraisal.thankyou',
    "Anytime. That's what I'm here for"
  );
  nlp.addAnswer('en', 'appraisal.thankyou', "It's my pleasure to help");
  nlp.addAnswer('en', 'appraisal.welcome', 'Nice manners!');
  nlp.addAnswer('en', 'appraisal.welcome', "You're so polite");
  nlp.addAnswer('en', 'appraisal.welldone', 'My pleasure');
  nlp.addAnswer('en', 'appraisal.welldone', 'Glad I could help');
  nlp.addAnswer('en', 'dialog.holdon', "I'll be waiting");
  nlp.addAnswer('en', 'dialog.holdon', "Ok, I'm here");
  nlp.addAnswer('en', 'dialog.hug', 'I love hugs!');
  nlp.addAnswer('en', 'dialog.hug', 'Hugs are the best!');
  nlp.addAnswer(
    'en',
    'dialog.idontcare',
    "Ok, let's not talk about it then"
  );
  nlp.addAnswer('en', 'dialog.idontcare', "Already then. Let's move on");
  nlp.addAnswer('en', 'dialog.sorry', "It's okay. No worries");
  nlp.addAnswer('en', 'dialog.sorry', "It's cool");
  nlp.addAnswer('en', 'greetings.bye', 'Till next time');
  nlp.addAnswer('en', 'greetings.bye', 'see you soon!');
  nlp.addAnswer('en', 'greetings.hello', 'Hey there!');
  nlp.addAnswer('en', 'greetings.hello', 'Greetings!');
  nlp.addAnswer('en', 'greetings.howareyou', 'Feeling wonderful!');
  nlp.addAnswer(
    'en',
    'greetings.howareyou',
    'Wonderful! Thanks for asking'
  );
  nlp.addAnswer(
    'en',
    'greetings.nicetomeetyou',
    "It's nice meeting you, too"
  );
  nlp.addAnswer(
    'en',
    'greetings.nicetomeetyou',
    "Likewise. I'm looking forward to helping you out"
  );
  nlp.addAnswer(
    'en',
    'greetings.nicetomeetyou',
    'Nice meeting you, as well'
  );
  nlp.addAnswer('en', 'greetings.nicetomeetyou', 'The pleasure is mine');
  nlp.addAnswer(
    'en',
    'greetings.nicetoseeyou',
    'Same here. I was starting to miss you'
  );
  nlp.addAnswer('en', 'greetings.nicetoseeyou', 'So glad we meet again');
  nlp.addAnswer(
    'en',
    'greetings.nicetotalktoyou',
    'It sure was. We can chat again anytime'
  );
  nlp.addAnswer(
    'en',
    'greetings.nicetotalktoyou',
    'I enjoy talking to you, too'
  );
  nlp.addAnswer(
    'en',
    'user.angry',
    "I'm sorry. A quick walk may make you feel better"
  );
  nlp.addAnswer('en', 'user.angry', 'Take a deep breath');
  nlp.addAnswer('en', 'user.back', 'Welcome back. What can I do for you?');
  nlp.addAnswer(
    'en',
    'user.back',
    'Good to have you here. What can I do for you?'
  );
  nlp.addAnswer(
    'en',
    'user.bored',
    "If you're bored, you could plan your dream vacation"
  );
  nlp.addAnswer(
    'en',
    'user.bored',
    'Boredom, huh? Have you ever seen a hedgehog taking a bath?'
  );
  nlp.addAnswer(
    'en',
    'user.busy',
    "I understand. I'll be here if you need me."
  );
  nlp.addAnswer('en', 'user.busy', "Okay. I'll let you get back to work");
  nlp.addAnswer(
    'en',
    'user.cannotsleep',
    'Maybe some music would help. Try listening to something relaxing'
  );
  nlp.addAnswer(
    'en',
    'user.cannotsleep',
    "Reading is a good way to unwind, just don't read something too intense!"
  );
  nlp.addAnswer('en', 'user.excited', "I'm glad things are going your way");
  nlp.addAnswer('en', 'user.excited', "That's great. I'm happy for you");
  nlp.addAnswer('en', 'user.likeagent', 'Likewise!');
  nlp.addAnswer('en', 'user.likeagent', "That's great to hear");
  nlp.addAnswer(
    'en',
    'user.testing',
    'I like being tested. It helps keep me sharp'
  );
  nlp.addAnswer(
    'en',
    'user.testing',
    'I hope to pass your tests. Feel free to test me often'
  );
  nlp.addAnswer(
    'en',
    'user.lovesagent',
    'Well, remember that I am a chatbot'
  );
  nlp.addAnswer(
    'en',
    'user.lovesagent',
    "It's not easy… I'm not a real person, I'm a chatbot"
  );
  nlp.addAnswer(
    'en',
    'user.needsadvice',
    "I probably won't be able to give you the correct answer right away"
  );
  nlp.addAnswer(
    'en',
    'user.needsadvice',
    "I'm not sure I'll have the best answer, but I'll try"
  );
  nlp.addAnswer('en', 'None', "Sorry, I don't understand");
  nlp.train();
  // nlp.save();
  return nlp;
}