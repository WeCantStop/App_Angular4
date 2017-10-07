import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userService';
import { Router } from '@angular/router';

@Component({
    selector: 'app-find',
    templateUrl: './find.component.html',
    styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

    public userName;
    public users;
    constructor(private userService: UserService, private router: Router) {
    }

    ngOnInit() {
        this.userName = '';
        this.userService.getUsers({}).subscribe(res => {
            this.users = res.data;
        });
    }

    // 增加用户
    addUser($event) { 
        if (!!$event && $event.keyCode === 13 || !$event) {
            let req = { name: this.userName };
            this.userService.addUser(req).subscribe(res => {
                this.userName = '';
                this.userService.getUsers({}).subscribe(res => {
                    this.users = res.data;
                });
            });
        }
    }

    // 删除用户
    delUser($event) {
        let name = $event.name;
        this.userService.delUser({ name: name }).subscribe(res => {
            this.userService.getUsers({}).subscribe(res => {
                this.users = res.data;
            });
        });
    }

    // 去用户详情
    getUserDetail(id) {
        this.router.navigate(['user/userInfo', id]);
    }
}
