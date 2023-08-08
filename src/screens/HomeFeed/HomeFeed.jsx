import React from "react";
import { ActionExplore } from "../../components/ActionExplore";
import { ActionSearch } from "../../components/ActionSearch";
import { ActionStarRate } from "../../components/ActionStarRate";
import { Bitcoin } from "../../components/Bitcoin";
import { Blogging } from "../../components/Blogging";
import { Button } from "../../components/Button";
import { ButtonWrapper } from "../../components/ButtonWrapper";
import { Design } from "../../components/Design";
import { Dev } from "../../components/Dev";
import { Downvote } from "../../components/Downvote";
import { Input } from "../../components/Input";
import { NavigationMenu } from "../../components/NavigationMenu";
import { NavigationMore } from "../../components/NavigationMore";
import { Polls } from "../../components/Polls";
import { ReactionBar } from "../../components/ReactionBar";
import { Seo } from "../../components/Seo";
import { Sidebar } from "../../components/Sidebar";
import { SocialIconsIc } from "../../components/SocialIconsIc";
import { SocialNotifications } from "../../components/SocialNotifications";
import { SocialPublicon } from "../../components/SocialPublicon";
import { Status } from "../../components/Status";
import { Tutorial } from "../../components/Tutorial";
import { Upvote } from "../../components/Upvote";
import "./style.css";

export const HomeFeed = () => {
  return (
    <div className="home-feed">
      <div className="div-5">
        <div className="creat-post">
          <div className="overlap-2">
            <div className="search-bar-wrapper">
              <div className="search-bar">
                <p className="p">Let’s share what going on your mind...</p>
              </div>
            </div>
            <Polls className="polls-instance" />
            <img
              className="ellipse"
              alt="Ellipse"
              src="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/ellipse-3@2x.png"
            />
            <div className="overlap-wrapper">
              <div className="overlap-3">
                <div className="text-wrapper-14">Post</div>
                <div className="vector-wrapper">
                  <img
                    className="vector-2"
                    alt="Vector"
                    src="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/vector.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="top-ribbon">
          <Input
            className="search-bar-ribbon"
            corner="rounded"
            inputClassName="input-instance"
            label={false}
            override={
              <ActionSearch icon="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-7.svg" />
            }
            size="default"
            style="light"
            text="Search your things here..."
            type="left-icon"
          />
          <div className="top-buttons-bar">
            <div className="overlap-4">
              <Button
                className="notific"
                corner="rounded"
                override={
                  <SocialNotifications
                    className="icon-10"
                    icon="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-6.svg"
                    iconClassName="social-notifications-instance"
                  />
                }
                size="default"
                style="light"
                type="icon"
              />
              <Status border="two" className="status-instance" style="light" type="color-border" />
              <div className="text-wrapper-15">99</div>
            </div>
            <Button
              className="starred"
              corner="rounded"
              override={
                <ActionStarRate
                  actionStarRate="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-5.svg"
                  className="action-star-rate-instance"
                />
              }
              size="default"
              style="light"
              type="icon"
            />
            <div className="overlap-group-3">
              <Button
                className="msgs"
                corner="rounded"
                override={
                  <SocialIconsIc
                    className="icon-10"
                    icon="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-4.svg"
                    iconClassName="icon-11"
                  />
                }
                size="default"
                style="light"
                type="icon"
              />
              <Status border="two" className="status-2" style="light" type="color-border" />
              <div className="text-wrapper-16">2</div>
            </div>
            <Button
              className="navigator"
              corner="rounded"
              override={
                <ActionExplore
                  className="icon-10"
                  icon="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-3.svg"
                  iconClassName="icon-11"
                />
              }
              size="default"
              style="light"
              type="icon"
            />
            <Button
              className="button-instance"
              corner="rounded"
              override={
                <SocialPublicon
                  className="icon-10"
                  icon="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-2.svg"
                  iconClassName="icon-11"
                />
              }
              size="default"
              style="light"
              type="icon"
            />
            <Button
              className="button-2"
              corner="rounded"
              override={
                <NavigationMenu
                  className="icon-10"
                  icon="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-1.svg"
                  iconClassName="navigation-menu-instance"
                />
              }
              size="default"
              style="light"
              type="icon"
            />
          </div>
          <div className="logo" />
          <img
            className="ribbon-profile-pic"
            alt="Ribbon profile pic"
            src="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/ellipse-3@2x.png"
          />
        </div>
        <div className="post">
          <div className="user-info-bar">
            <div className="overlap-group-4">
              <div className="text-wrapper-17">University of Sri Jayawardenepura</div>
              <div className="text-wrapper-18">Geethika Isuru Sampath</div>
            </div>
            <div className="text-wrapper-19">+ Follow</div>
            <div className="text-wrapper-20">2d</div>
            <img
              className="ellipse-2"
              alt="Ellipse"
              src="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/ellipse-1@2x.png"
            />
          </div>
          <div className="comment-tab">
            <div className="overlap-5">
              <div className="BG" />
              <img
                className="im-saying-that-you"
                alt="Im saying that you"
                src="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/i-m-saying-that-you-should-chatgpt-it-or-google-it--why-the-f-ar.png"
              />
              <div className="UP-down-comment">
                <div className="overlap-group-5">
                  <div className="BG-2" />
                  <div className="element"> 48K</div>
                  <div className="text-wrapper-21">|</div>
                  <Upvote
                    className="upvote-instance"
                    upvote="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/upvote-2.svg"
                  />
                  <Downvote
                    className="downvote-instance"
                    downvote="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/downvote-2.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper-22">University of Kelaniya</div>
              <h1 className="h-1">...</h1>
              <div className="text-wrapper-23">1d</div>
              <div className="dot" />
              <div className="text-wrapper-24">Pramuditha Vidushan</div>
              <img
                className="profile"
                alt="Profile"
                src="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/profile-@2x.png"
              />
            </div>
          </div>
          <div className="overlap-6">
            <ReactionBar className="reaction-bar-instance" />
            <img
              className="post-images"
              alt="Post images"
              src="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/post-images.png"
            />
          </div>
          <img
            className="what-are-the-two"
            alt="What are the two"
            src="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/what-are-the-two-types-of-software-products--briefly-explain-the.png"
          />
          <div className="side-bar-for-more">
            <Button
              className="button-3"
              corner="rounded"
              override={
                <NavigationMore
                  className="navigation-more-horiz"
                  icon="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon.svg"
                  iconClassName="navigation-more-instance"
                />
              }
              size="small"
              style="light"
              type="icon"
            />
          </div>
          <div className="user-comment">
            <ButtonWrapper className="button-4" divClassName="button-5" text="Post" />
            <div className="overlap-7">
              <div className="input-data">
                <div className="text-wrapper-25">Write your comment...</div>
              </div>
              <div className="frame-2">
                <div className="overlap-group-6">
                  <img
                    className="eyes"
                    alt="Eyes"
                    src="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/eyes@2x.png"
                  />
                  <img
                    className="mouth"
                    alt="Mouth"
                    src="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/mouth.svg"
                  />
                </div>
              </div>
            </div>
            <img
              className="pamela"
              alt="Pamela"
              src="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/pamela@2x.png"
            />
          </div>
        </div>
        <div className="popular-tags">
          <div className="main-3">
            <div className="title-2">
              <div className="text-wrapper-26">Popular Tags</div>
            </div>
            <div className="tags">
              <div className="tag">
                <div className="icon-12">
                  <Dev
                    className="design-component-instance-node-2"
                    dev="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/dev.svg"
                  />
                </div>
                <div className="name">
                  <div className="text-wrapper-27">#programming</div>
                  <p className="text-wrapper-28">82,645 Posted by this tag</p>
                </div>
              </div>
              <div className="tag-2">
                <div className="bitcoin-wrapper">
                  <Bitcoin
                    bitcoin="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/bitcoin.svg"
                    className="design-component-instance-node-2"
                  />
                </div>
                <div className="name">
                  <div className="text-wrapper-27">#computing</div>
                  <div className="text-wrapper-28">65,523 Posted • Trending</div>
                </div>
              </div>
              <div className="tag-2">
                <div className="design-wrapper">
                  <Design
                    className="design-component-instance-node-2"
                    design="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/design.svg"
                  />
                </div>
                <div className="name">
                  <div className="text-wrapper-27">#design</div>
                  <div className="text-wrapper-28">51,354 • Trending</div>
                </div>
              </div>
              <div className="tag-2">
                <div className="icon-12">
                  <Blogging
                    blogging="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/blogging.svg"
                    className="design-component-instance-node-2"
                  />
                </div>
                <div className="name">
                  <div className="text-wrapper-27">#business</div>
                  <p className="text-wrapper-28">48,029 Posted by this tag</p>
                </div>
              </div>
              <div className="tag-2">
                <div className="tutorial-wrapper">
                  <Tutorial
                    className="design-component-instance-node-2"
                    tutorial="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/tutorial.svg"
                  />
                </div>
                <div className="name">
                  <div className="text-wrapper-27">#tutorial</div>
                  <div className="text-wrapper-28">51,354 • Trending</div>
                </div>
              </div>
              <div className="tag-2">
                <div className="seo-wrapper">
                  <Seo
                    className="design-component-instance-node-2"
                    seo="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/seo.svg"
                  />
                </div>
                <div className="name">
                  <div className="text-wrapper-27">#moraEXMO</div>
                  <p className="text-wrapper-28">99,645 Posted by this tag</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidebar
          className="sidebar-instance"
          dark="off"
          divClassName="sidebar-11"
          divClassName1="sidebar-11"
          divClassName2="sidebar-11"
          divClassName3="sidebar-11"
          divClassNameOverride="sidebar-12"
          followFollow="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/follow.svg"
          followFollowClassName="sidebar-13"
          followingClassName="sidebar-3"
          followingIconClassName="sidebar-5"
          frameClassName="sidebar-15"
          mainClassName="sidebar-2"
          mainClassName1="sidebar-4"
          mainClassName2="sidebar-4"
          mainClassNameOverride="sidebar-4"
          nAmeClassName="sidebar-14"
          newClassName="sidebar-3"
          newGroupDivClassName="sidebar-7"
          newGroupGroupClassName="sidebar-8"
          newGroupOverlapGroupClassName="sidebar-9"
          newIconClassName="sidebar-5"
          newNewClassName="sidebar-6"
          pClassName="sidebar-12"
          pClassNameOverride="sidebar-12"
          popularClassName="sidebar-3"
          popularIconClassName="sidebar-5"
          popularPopular="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/frame-15.svg"
          popularPopularClassName="sidebar-13"
          titleClassName="sidebar-10"
          titleClassName1="sidebar-10"
          titleClassNameOverride="sidebar-10"
        />
      </div>
    </div>
  );
};
