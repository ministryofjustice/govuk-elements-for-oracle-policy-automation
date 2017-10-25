!function(e){"use strict";window.GOVUK=window.GOVUK||{};var t=function(e,t){return t=t?'class="'+t+'"':"","<a "+t+' href="{{surveyUrl}}" id="take-survey" target="_blank" rel="noopener noreferrer">'+e+"</a>"},r=function(e){return'<section id="user-satisfaction-survey" class="visible" aria-hidden="false">  <div class="survey-wrapper">    <a class="survey-close-button" href="#user-survey-cancel" aria-labelledby="survey-title user-survey-cancel" id="user-survey-cancel" role="button">Close</a>    <h2 class="survey-title" id="survey-title">{{title}}</h2>'+e+"  </div></section>"},n=r("<p>"+t("{{surveyCta}}","survey-primary-link")+' <span class="postscript-cta">{{surveyCtaPostscript}}</span></p>'),i=r('<div id="email-survey-pre">  <a class="survey-primary-link" href="#email-survey-form" id="email-survey-open" rel="noopener noreferrer" role="button" aria-expanded="false">    {{surveyCta}}  </a></div><form id="email-survey-form" action="/contact/govuk/email-survey-signup" method="post" class="js-hidden" aria-hidden="true">  <div class="survey-inner-wrapper">    <div id="survey-form-description" class="survey-form-description">{{surveyFormDescription}}      <br> {{surveyFormCtaPostscript}}    </div>    <label class="survey-form-label" for="survey-email-address">      Email Address    </label>    <input name="email_survey_signup[survey_id]" type="hidden" value="{{surveyId}}">    <input name="email_survey_signup[survey_source]" type="hidden" value="{{surveySource}}">    <input name="email_survey_signup[ga_client_id]" type="hidden" value="{{gaClientId}}">    <input class="survey-form-input" name="email_survey_signup[email_address]" id="survey-email-address" type="text" aria-describedby="survey-form-description">    <button class="survey-form-button" type="submit">{{surveyFormCta}}</button>'+t("{{surveyFormNoEmailInvite}}")+'  </div></form><div id="email-survey-post-success" class="js-hidden" aria-hidden="true" tabindex="-1">  {{surveySuccess}}</div><div id="email-survey-post-failure" class="js-hidden" aria-hidden="true" tabindex="-1">  {{surveyFailure}}</div>'),a=2,s=function(){var e=window.location.pathname;switch(!0){case/^\/working-tax-credit(?:\/|$)/.test(e):return"workingtaxcreditGOV&utm_source=Other&utm_medium=other&t=HMRC&id=12";case/^\/guidance\/money-laundering-regulations-register-with-hmrc(?:\/|$)/.test(e):return"MoneyLaundering RegulationsGOV&utm_source=Other&utm_medium=gov.uk%20survey&t=HMRC&id=45";case/^\/child-tax-credit(?:\/|$)/.test(e):return"ChildTaxCreditGOV&utm_source=Other&utm_medium=gov.uk%20survey&t=HMRC&id=10";case/^\/check-state-pension(?:\/|$)/.test(e):return"checkstatepensionGOV&utm_source=Other&utm_medium=other&t=HMRC&id=46";case/^\/apply-marriage-allowance(?:\/|$)/.test(e):return"marriageallowanceGOV&utm_source=Other&utm_medium=other&t=HMRC&id=47";case/^\/stamp-duty-land-tax(?:\/|$)/.test(e):return"StampDutyLandTaxGOV&utm_source=Other&utm_medium=other&t=HMRC&id=48";case/^\/guidance\/pay-apprenticeship-levy(?:\/|$)/.test(e):return"Apprenticeship Levy&utm_source=Money_and_tax&utm_medium=gov.uk&t=HMRC&id=7";case/^\/update-company-car-details(?:\/|$)/.test(e):return"CompanyCarGOV&utm_source=Other&utm_medium=other&t=HMRC&id=49";case/^\/guidance\/paying-your-employees-expenses-and-benefits-through-your-payroll(?:\/|$)/.test(e):return"PayrollExpensesBenefitsGOV&utm_source=Other&utm_medium=other&t=HMRC&id=50";case/^\/guidance\/pension-schemes-protect-your-lifetime-allowance(?:\/|$)/.test(e):return"PensionSchemeLifetimeAllowanceGOV&utm_source=Other&utm_medium=other&t=HMRC&id=51";case/^\/send-employment-intermediary-report(?:\/|$)/.test(e):return"EmploymentIntermediaryReportGOV&utm_source=Other&utm_medium=other&t=HMRC&id=52";case/^\/guidance\/tell-hmrc-about-your-employment-related-securities(?:\/|$)/.test(e):return"EmploymentRelatedSecuritiesGOV&utm_source=Other&utm_medium=other&t=HMRC&id=53";case/^\/guidance\/pension-administrators-check-a-members-gmp(?:\/|$)/.test(e):return"PensionAdministratorsGMPGOV&utm_source=Other&utm_medium=other&t=HMRC&id=54";default:return""}},o=function(){var e=window.location.pathname;switch(!0){case/^\/complain-about-school(?:\/|$)/.test(e):return"Complain%20about%20a%20school%20or%20childminder";case/^\/children-with-special-educational-needs(?:\/|$)/.test(e):return"Special%20educational%20needs%20SEN";case/^\/school-term-holiday-dates(?:\/|$)/.test(e):return"School%20term%20and%20holiday%20dates";case/^\/school-attendance-absence(?:\/|$)/.test(e):return"School%20attendance%20and%20absence";case/^\/school-uniform(?:\/|$)/.test(e):return"School%20uniform";case/^\/bullying-at-school(?:\/|$)/.test(e):return"Bullying%20at%20school";case/^\/health-safety-school-children(?:\/|$)/.test(e):return"Health%20and%20safety%20for%20school%20children";case/^\/school-discipline-exclusions(?:\/|$)/.test(e):return"School%20discipline%20and%20exclusions";case/^\/childcare-out-of-school-hours(?:\/|$)/.test(e):return"Childcare%20out%20of%20school%20hours";case/^\/after-school-holiday-club(?:\/|$)/.test(e):return"Find%20before%20and%20after%20school%20and%20holiday%20clubs";default:return""}},u={defaultSurvey:{url:"https://www.smartsurvey.co.uk/s/gov_uk?c={{currentPath}}",identifier:"user_satisfaction_survey",frequency:6,surveyType:"email"},smallSurveys:[{identifier:"hmrc_jul2017",surveyType:"url",frequency:20,startTime:new Date("July 21, 2017").getTime(),endTime:new Date("November 20, 2017 23:59:50").getTime(),url:"https://signup.take-part-in-research.service.gov.uk/home?utm_campaign="+s(),templateArgs:{title:"Help improve GOV.UK",surveyCta:"Answer some questions about yourself to join the research community.",surveyCtaPostscript:"This link opens in a new tab."},activeWhen:{path:["^/working-tax-credit(?:/|$)","^/guidance/money-laundering-regulations-register-with-hmrc(?:/|$)","^/child-tax-credit(?:/|$)","^/check-state-pension(?:/|$)","^/apply-marriage-allowance(?:/|$)","^/stamp-duty-land-tax(?:/|$)","^/guidance/pay-apprenticeship-levy(?:/|$)","^/update-company-car-details(?:/|$)","^/guidance/paying-your-employees-expenses-and-benefits-through-your-payroll(?:/|$)","^/guidance/pension-schemes-protect-your-lifetime-allowance(?:/|$)","^/send-employment-intermediary-report(?:/|$)","^/guidance/tell-hmrc-about-your-employment-related-securities(?:/|$)","^/guidance/pension-administrators-check-a-members-gmp(?:/|$)"]}},{identifier:"hmrc_child_benefits",surveyType:"url",frequency:6,startTime:new Date("September 13, 2017").getTime(),endTime:new Date("October 14, 2017 23:59:50").getTime(),url:"https://signup.take-part-in-research.service.gov.uk/?utm_campaign=ChildBenefitGOV&utm_source=Other&utm_medium=other&t=HMRC&id=26",templateArgs:{title:"Help improve GOV.UK",surveyCta:"Answer some questions about yourself to join the research community.",surveyCtaPostscript:"This link opens in a new tab."},activeWhen:{path:["^/child-benefit/?$"]}},{identifier:"hmrc_tax_payments",surveyType:"url",frequency:6,startTime:new Date("September 13, 2017").getTime(),endTime:new Date("October 14, 2017 23:59:50").getTime(),url:"https://signup.take-part-in-research.service.gov.uk/?utm_campaign=OverpayUnderpayGOV&utm_source=Other&utm_medium=other&t=HMRC&id=27",templateArgs:{title:"Help improve GOV.UK",surveyCta:"Answer some questions about yourself to join the research community.",surveyCtaPostscript:"This link opens in a new tab."},activeWhen:{path:["^/tax-overpayments-and-underpayments/?$"]}},{identifier:"hmrc_payments_card",surveyType:"url",frequency:10,startTime:new Date("September 13, 2017").getTime(),endTime:new Date("October 14, 2017 23:59:50").getTime(),url:"https://signup.take-part-in-research.service.gov.uk/?utm_campaign=onlinepaymentsGOV&utm_source=Other&utm_medium=other&t=HMRC&id=32",templateArgs:{title:"Help improve GOV.UK",surveyCta:"Answer some questions about yourself to join the research community.",surveyCtaPostscript:"This link opens in a new tab."},activeWhen:{path:["^/pay-tax-debit-credit-card/?$"]}},{identifier:"hmrc_jul2017",surveyType:"url",frequency:20,startTime:new Date("September 21, 2017").getTime(),endTime:new Date("December 21, 2017 23:59:50").getTime(),url:"https://signup.take-part-in-research.service.gov.uk/?utm_campaign=simpleassessmentGOV&utm_source=Other&utm_medium=other&t=HMRC&id=55",templateArgs:{title:"Help improve GOV.UK",surveyCta:"Answer some questions about yourself to join the research community.",surveyCtaPostscript:"This link opens in a new tab."},activeWhen:{path:["^/simple-assessment/?$"]}},{identifier:"dfe_jul2017",surveyType:"url",frequency:6,startTime:new Date("July 18, 2017").getTime(),endTime:new Date("September 30, 2017 23:59:50").getTime(),url:"https://signup.take-part-in-research.service.gov.uk/home?utm_campaign="+o()+"&utm_source=Education&utm_medium=gov.uk&t=DfE",templateArgs:{title:"Help improve GOV.UK",surveyCta:"Answer some questions about yourself to join the research community.",surveyCtaPostscript:"This link opens in a new tab."},activeWhen:{path:["^/complain-about-school(?:/|$)","^/children-with-special-educational-needs(?:/|$)","^/school-term-holiday-dates(?:/|$)","^/school-attendance-absence(?:/|$)","^/school-uniform(?:/|$)","^/bullying-at-school(?:/|$)","^/health-safety-school-children(?:/|$)","^/school-discipline-exclusions(?:/|$)","^/childcare-out-of-school-hours(?:/|$)","^/after-school-holiday-club(?:/|$)"]}},{identifier:"scrutinise_government",surveyType:"url",frequency:6,startTime:new Date("August 25, 2017").getTime(),endTime:new Date("October 1, 2017 23:59:50").getTime(),url:"https://signup.take-part-in-research.service.gov.uk/?utm_campaign=Scrutinise_government&utm_source=Hold_gov_to_account&utm_medium=gov.uk&t=GDS&id=15",templateArgs:{title:"Help improve GOV.UK",surveyCta:"Answer some questions about yourself to join the research community.",surveyCtaPostscript:"This link opens in a new tab."},activeWhen:{path:["^/government/announcements/?$","^/government/publications/?$","^/government/statistics/?$","^/government/organisations/hm-revenue-customs/?$","^/government/organisations/companies-house/?$","^/government/organisations/driver-and-vehicle-licensing-agency/?$","^/government/organisations/uk-visas-and-immigration/?$","^/government/organisations/land-registry/?$"]}},{identifier:"content_history",surveyType:"url",frequency:6,startTime:new Date("August 25, 2017").getTime(),endTime:new Date("October 1, 2017 23:59:50").getTime(),url:"https://signup.take-part-in-research.service.gov.uk/?utm_campaign=Content_History&utm_source=Hold_gov_to_account&utm_medium=gov.uk&t=GDS&id=16",templateArgs:{title:"Help improve GOV.UK",surveyCta:"Answer some questions about yourself to join the research community.",surveyCtaPostscript:"This link opens in a new tab."},activeWhen:{path:["^/government/publications/applying-for-a-passport(?:/|$)","^/government/publications/application-to-naturalise-as-a-british-citizen-form-an(?:/|$)","^/government/publications/working-together-to-safeguard-children--2(?:/|$)","^/government/publications/apply-for-a-document-certifying-permanent-residence-or-permanent-residence-card-form-eea-pr(?:/|$)","^/government/publications/fees-for-citizenship-applications(?:/|$)","^/guidance/step-up-to-social-work-information-for-applicants(?:/|$)","^/government/publications/register-of-licensed-sponsors-workers(?:/|$)","^/guidance/scaled-scores-at-key-stage-1(?:/|$)","^/government/publications/financial-sanctions-consolidated-list-of-targets(?:/|$)","^/government/publications/list-of-qualifying-recognised-overseas-pension-schemes-qrops(?:/|$)"]}},{identifier:"coming_to_the_UK_content_Transformation",surveyType:"url",frequency:6,startTime:new Date("August 25, 2017").getTime(),endTime:new Date("October 1, 2017 23:59:50").getTime(),url:"https://signup.take-part-in-research.service.gov.uk/?utm_campaign=Coming_to_the_UK_content_Transformation&utm_source=Group_and_Transform_Content&utm_medium=gov.uk&t=GDS&id=17",templateArgs:{title:"Help improve GOV.UK",surveyCta:"Answer some questions about yourself to join the research community.",surveyCtaPostscript:"This link opens in a new tab."},activeWhen:{path:["^/government/publications/chapter-18-naturalisation-at-discretion-nationality-instructions(?:/|$)","^/government/publications/chapter-8-appendix-fm-family-members(?:/|$)","^/government/publications/visit-guidance(?:/|$)","^/government/publications/sponsorship-codes-of-practice-for-skilled-workers(?:/|$)","^/government/publications/direct-family-members-of-european-economic-area-eea-nationals(?:/|$)","^/government/publications/general-grounds-for-refusal-about-this-guidance(?:/|$)","^/government/publications/chapter-6-information-about-applications-for-british-citizenship-nationality-instructions(?:/|$)","^/government/publications/eea-family-permits-eun02/eea-family-permit-eun02(?:/|$)","^/government/collections/nationality-instructions-volume-1(?:/|$)","^/government/collections/entry-clearance-basics-entry-clearance-guidance(?:/|$)"]}},{identifier:"becoming_a_childminder",surveyType:"url",frequency:6,startTime:new Date("August 25, 2017").getTime(),endTime:new Date("October 1, 2017 23:59:50").getTime(),url:"https://signup.take-part-in-research.service.gov.uk/?utm_campaign=Becoming_a_childminder&utm_source=Group_and_Transform_Content&utm_medium=gov.uk&t=GDS&id=18",templateArgs:{title:"Help improve GOV.UK",surveyCta:"Answer some questions about yourself to join the research community.",surveyCtaPostscript:"This link opens in a new tab."},activeWhen:{path:["^/register-childminder-childcare-provider(?:/|$)","^/register-as-childminder-northern-ireland(?:/|$)"]}},{identifier:"edu_tt",surveyType:"url",frequency:6,startTime:new Date("September 15, 2017").getTime(),endTime:new Date("September 25, 2017 23:59:50").getTime(),url:"https://www.smartsurvey.co.uk/s/ZZRCN/?c={{currentPath}}",templateArgs:{title:"Help improve GOV.UK",surveyCta:"Take the 2 minute survey.",surveyCtaPostscript:"This will open in another window."},activeWhen:{section:["education","childcare"],organisation:["<D6>","<D106>","<D109>","<EA243>","<EA86>","<EA242>","<EA541>"]}},{identifier:"learning_to_drive",surveyType:"url",frequency:1,startTime:new Date("September 21, 2017").getTime(),endTime:new Date("October 21, 2017 23:59:50").getTime(),url:"https://www.smartsurvey.co.uk/s/learntodrive/?c={{currentPath}}",templateArgs:{title:"Help improve GOV.UK\u2019s information on driving",surveyCta:"Answer 4 questions about your visit.",surveyCtaPostscript:"This link opens in a new tab"},activeWhen:{path:["^/topic/driving-tests-and-learning-to-drive/car/?$","^/find-driving-schools-and-lessons/?$","^/government/publications/car-show-me-tell-me-vehicle-safety-questions/?$","^/legal-obligations-drivers-riders/?$","^/vehicles-can-drive/?$","^/driving-lessons-learning-to-drive(?:/|$)","^/guidance/the-highway-code(?:/|$)"]},surveySeenTooManyTimesLimit:4}],init:function(){if(u.canShowAnySurvey()){var e=u.getActiveSurvey(u.defaultSurvey,u.smallSurveys);void 0!==e&&u.displaySurvey(e)}},canShowAnySurvey:function(){return u.pathInBlacklist()?!1:u.otherNotificationVisible()?!1:u.userCompletedTransaction()?!1:e("#user-satisfaction-survey-container").length<=0?!1:!0},processTemplate:function(t,r){return e.each(t,function(e,t){r=r.replace(new RegExp("{{"+e+"}}","g"),t)}),r},getUrlSurveyTemplate:function(){return{render:function(t){var r={title:"Tell us what you think of GOV.UK",surveyCta:"Take the 3 minute survey",surveyCtaPostscript:"This will open a short survey on another website",surveyUrl:u.addParamsToURL(t.url)},i=e.extend(r,t.templateArgs);return u.processTemplate(i,n)}}},getEmailSurveyTemplate:function(){return{render:function(t){var r={title:"Tell us what you think of GOV.UK",surveyCta:"Take a short survey to give us your feedback",surveyFormDescription:"We\u2019ll send you a link to a feedback form. It only takes 2 minutes to fill in.",surveyFormCta:"Send me the survey",surveyFormCtaPostscript:"Don\u2019t worry: we won\u2019t send you spam or share your email address with anyone.",surveyFormNoEmailInvite:"Don\u2019t have an email address?",surveySuccess:"Thanks, we\u2019ve sent you an email with a link to the survey.",surveyFailure:"Sorry, we\u2019re unable to send you an email right now. Please try again later.",surveyId:t.identifier,surveySource:u.currentPath(),surveyUrl:u.addParamsToURL(t.url),gaClientId:GOVUK.analytics.gaClientId},n=e.extend(r,t.templateArgs);return u.processTemplate(n,i)}}},getActiveSurveys:function(t){return e.grep(t,function(e,t){return u.currentTime()>=e.startTime&&u.currentTime()<=e.endTime?u.activeWhen(e):void 0})},getDisplayableSurveys:function(t){return e.grep(t,function(e,t){return u.isSurveyToBeDisplayed(e)})},getActiveSurvey:function(e,t){var r=u.getActiveSurveys(t),n=[e].concat(r),i=u.getDisplayableSurveys(n);return i.length<2?i[0]:i[Math.floor(Math.random()*i.length)]},displaySurvey:function(t){var r=e("#user-satisfaction-survey-container");if("email"===t.surveyType)u.displayEmailSurvey(t,r);else{if("url"!==t.surveyType&&void 0!==t.surveyType)return;u.displayURLSurvey(t,r)}u.incrementSurveySeenCounter(t),u.trackEvent(t.identifier,"banner_shown","Banner has been shown")},displayURLSurvey:function(e,t){var r=u.getUrlSurveyTemplate();t.append(r.render(e)),u.setURLSurveyEventHandlers(e)},displayEmailSurvey:function(e,t){var r=u.getEmailSurveyTemplate();t.append(r.render(e)),u.setEmailSurveyEventHandlers(e)},addParamsToURL:function(e){var t=e.replace(/\{\{currentPath\}\}/g,u.currentPath());return-1!==e.indexOf("?c=")?t+"&gcl="+GOVUK.analytics.gaClientId:t+"?gcl="+GOVUK.analytics.gaClientId},setEmailSurveyEventHandlers:function(t){var r=e("#email-survey-open"),n=e("#user-survey-cancel"),i=e("#email-survey-pre"),a=e("#email-survey-form"),s=e("#email-survey-post-success"),o=e("#email-survey-post-failure"),c=e("#survey-email-address"),l=e("#take-survey");l.click(function(){u.setSurveyTakenCookie(t),u.hideSurvey(t),u.trackEvent(t.identifier,"no_email_link","User taken survey via no email link")}),r.click(function(e){return t.surveyExpanded=!0,u.trackEvent(t.identifier,"email_survey_open","Email survey opened"),i.addClass("js-hidden").attr("aria-hidden","true"),a.removeClass("js-hidden").attr("aria-hidden","false"),c.focus(),e.stopPropagation(),!1}),n.click(function(e){return u.setSurveyTakenCookie(t),u.hideSurvey(t),t.surveyExpanded?u.trackEvent(t.identifier,"email_survey_cancel","Email survey cancelled"):u.trackEvent(t.identifier,"banner_no_thanks","No thanks clicked"),e.stopPropagation(),!1}),a.submit(function(r){var n=function(){a.addClass("js-hidden").attr("aria-hidden","true"),s.removeClass("js-hidden").attr("aria-hidden","false"),s.focus(),u.setSurveyTakenCookie(t),u.trackEvent(t.identifier,"email_survey_taken","Email survey taken"),u.trackEvent(t.identifier,"banner_taken","User taken survey")},i=function(){a.addClass("js-hidden").attr("aria-hidden","true"),o.removeClass("js-hidden").attr("aria-hidden","false"),o.focus()},c=a.attr("action");return/\.js$/.test(c)||(c+=".js"),e.ajax({type:"POST",url:c,dataType:"json",data:a.serialize(),success:n,error:i,statusCode:{500:i}}),r.stopPropagation(),!1})},setURLSurveyEventHandlers:function(t){var r=e("#user-survey-cancel"),n=e("#take-survey");r.click(function(e){return u.setSurveyTakenCookie(t),u.hideSurvey(t),u.trackEvent(t.identifier,"banner_no_thanks","No thanks clicked"),e.stopPropagation(),!1}),n.click(function(){u.setSurveyTakenCookie(t),u.hideSurvey(t),u.trackEvent(t.identifier,"banner_taken","User taken survey")})},isSurveyToBeDisplayed:function(e){return"true"===GOVUK.cookie(u.surveyTakenCookieName(e))?!1:u.surveyHasBeenSeenTooManyTimes(e)?!1:u.randomNumberMatches(e.frequency)},pathInBlacklist:function(){var e=new RegExp("^/(?:"+/service-manual/.source+")(?:/|$)");return e.test(u.currentPath())},userCompletedTransaction:function(){function e(e,t){return e.indexOf(t)>-1}var t=u.currentPath();return e(t,"/done")||e(t,"/transaction-finished")||e(t,"/driving-transaction-finished")?!0:void 0},trackEvent:function(e,t,r){window.GOVUK.analytics.trackEvent(e,t,{label:r,value:1,nonInteraction:!0})},setSurveyTakenCookie:function(e){window.GOVUK.cookie(u.surveyTakenCookieName(e),!0,{days:90})},incrementSurveySeenCounter:function(e){var t=u.surveySeenCookieName(e),r=u.surveySeenCount(e)+1,n=u.seenTooManyTimesCooloff(e);n?window.GOVUK.cookie(t,r,{days:n}):window.GOVUK.cookie(t,r)},seenTooManyTimesCooloff:function(e){return e.seenTooManyTimesCooloff?l(e.seenTooManyTimesCooloff,void 0,1):void 0},hideSurvey:function(t){e("#user-satisfaction-survey").removeClass("visible").attr("aria-hidden","true")},randomNumberMatches:function(e){return 0===Math.floor(Math.random()*e)},otherNotificationVisible:function(){var t=[".govuk-emergency-banner:visible","#global-cookie-message:visible","#global-browser-prompt:visible","#taxonomy-survey:visible"];return e(t.join(", ")).length>0},surveyHasBeenSeenTooManyTimes:function(e){return u.surveySeenCount(e)>=u.surveySeenTooManyTimesLimit(e)},surveySeenTooManyTimesLimit:function(e){var t=e.seenTooManyTimesLimit;return"unlimited"===String(t).toLowerCase()?1/0:l(t,a,1)},surveySeenCount:function(e){return l(GOVUK.cookie(u.surveySeenCookieName(e)),0,0)},surveyTakenCookieName:function(e){return c("taken_"+e.identifier)},surveySeenCookieName:function(e){return c("survey_seen_"+e.identifier)},pathMatch:function(t){if(void 0===t)return!1;var r=new RegExp(e.map(e.makeArray(t),function(e,t){return/[\^\$]/.test(e)?"(?:"+e+")":"(?:/"+e+"(?:/|$))"}).join("|"));return r.test(u.currentPath())},breadcrumbMatch:function(t){if(void 0===t)return!1;var r=new RegExp(e.makeArray(t).join("|"),"i");return r.test(u.currentBreadcrumb())},sectionMatch:function(t){if(void 0===t)return!1;var r=new RegExp(e.makeArray(t).join("|"),"i");return r.test(u.currentSection())},organisationMatch:function(t){if(void 0===t)return!1;var r=new RegExp(e.makeArray(t).join("|"));return r.test(u.currentOrganisation())},activeWhen:function(e){if(e.hasOwnProperty("activeWhen")){if(e.activeWhen.hasOwnProperty("path")||e.activeWhen.hasOwnProperty("breadcrumb")||e.activeWhen.hasOwnProperty("section")||e.activeWhen.hasOwnProperty("organisation")){var t=e.activeWhen.matchType||"include",r=u.pathMatch(e.activeWhen.path),n=u.breadcrumbMatch(e.activeWhen.breadcrumb),i=u.sectionMatch(e.activeWhen.section),a=u.organisationMatch(e.activeWhen.organisation),s=r||n||i||a;return"exclude"!==t?s:!s}return!0}return!0},currentTime:function(){return(new Date).getTime()},currentPath:function(){return window.location.pathname},currentBreadcrumb:function(){return e(".govuk-breadcrumbs").text()||""},currentSection:function(){return e('meta[name="govuk:section"]').attr("content")||""},currentOrganisation:function(){return e('meta[name="govuk:analytics:organisations"]').attr("content")||""}},c=function(e){var t=e.replace(/(\_\w)/g,function(e){return e.charAt(1).toUpperCase()});return"govuk_"+t},l=function(e,t,r){var n=parseInt(e,10);return isNaN(n)||r>n?t:n};window.GOVUK.userSurveys=u,e(document).ready(function(){GOVUK.userSurveys&&(GOVUK.analytics&&GOVUK.analytics.gaClientId?window.GOVUK.userSurveys.init():e(window).on("gaClientSet",function(){window.GOVUK.userSurveys.init()}))})}(window.jQuery);