import React from "react";

export default function FootballNews({ data }) {
  return (
    <>
      <div>FootballNews</div>
      <div>
        {data.map((e) => {
          return (
            <>
              <div class="container mt-5 mb-5">
                <div class="row d-flex align-items-center justify-content-center">
                  <div class="col-md-6">
                    <div class="card">
                      <div class="d-flex justify-content-between p-2 px-3">
                        <div class="d-flex flex-row align-items-center">
                          {" "}
                          <img
                            src={e.imageuser}
                            width="50"
                            class="rounded-circle"
                          />
                          <div class="d-flex flex-column ml-2">
                            {" "}
                            <span class="font-weight-bold">
                              {e.username}
                            </span>{" "}
                            <small class="text-primary">{e.categorie}</small>{" "}
                          </div>
                        </div>
                        <div class="d-flex flex-row mt-1 ellipsis">
                          {" "}
                          <small class="mr-2">{e.postedat}</small>{" "}
                          <i class="fa fa-ellipsis-h"></i>{" "}
                        </div>
                      </div>{" "}
                      <img src={e.postimage} class="img-fluid" />
                      <div class="p-2">
                        <p class="text-justify">{e.postcontent}</p>

                        <div class="d-flex justify-content-between align-items-center">
                          <div class="d-flex flex-row icons d-flex align-items-center">
                            {" "}
                            <i class="fa fa-heart"></i>{" "}
                            <i class="fa fa-smile-o ml-2"></i>{" "}
                          </div>
                          <div class="d-flex flex-row muted-color">
                            {" "}
                            <span>2 comments</span>{" "}
                            <span class="ml-2">Share</span>{" "}
                          </div>
                        </div>

                        <div class="comments">
                          <div class="d-flex flex-row mb-2">
                            {" "}
                            <img
                              src="https://i.imgur.com/9AZ2QX1.jpg"
                              width="40"
                              class="rounded-image"
                            />
                            <div class="d-flex flex-column ml-2">
                              {" "}
                              <span class="name">Daniel Frozer</span>{" "}
                              <small class="comment-text">
                                I like this alot! thanks alot
                              </small>
                              <div class="d-flex flex-row align-items-center status">
                                {" "}
                                <small>Like</small> <small>Reply</small>{" "}
                                <small>Translate</small> <small>18 mins</small>{" "}
                              </div>
                            </div>
                          </div>
                          <div class="d-flex flex-row mb-2">
                            {" "}
                            <img
                              src="https://i.imgur.com/1YrCKa1.jpg"
                              width="40"
                              class="rounded-image"
                            />
                            <div class="d-flex flex-column ml-2">
                              {" "}
                              <span class="name">Elizabeth goodmen</span>{" "}
                              <small class="comment-text">
                                Thanks for sharing!
                              </small>
                              <div class="d-flex flex-row align-items-center status">
                                {" "}
                                <small>Like</small> <small>Reply</small>{" "}
                                <small>Translate</small> <small>8 mins</small>{" "}
                              </div>
                            </div>
                          </div>
                          <div class="comment-input">
                            {" "}
                            <input type="text" class="form-control" />
                            <div class="fonts">
                              {" "}
                              <i class="fa fa-camera"></i>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
