import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';

export class Data {
    public UserNamePenyewa : string;
    public PasswordPenyewa : string;
    public HakAkses : string;
}