#include <iostream>
#include <string>
using namespace std;

// U D F B L R -> 0 1 2 3 4 5
char cube[6][3][3];
char colors[6] = {'w', 'y', 'r', 'o', 'g', 'b'};

void rotateFace(char face[3][3], char dir) {
    char temp[3][3];
    for (int i = 0; i < 3; ++i) {
        for (int j = 0; j < 3; ++j) {
            if (dir == '+') {
                temp[i][j] = face[3 - j - 1][i];
            } else {
                temp[i][j] = face[j][3 - i - 1];
            }
        }
    }
    for (int i = 0; i < 3; ++i) {
        for (int j = 0; j < 3; ++j) {
            face[i][j] = temp[i][j];
        }
    }
}

void rotateCube(char m, char dir) {
    int f = (m == 'U') ? 0 : (m == 'D') ? 1 : (m == 'F') ? 2 :
            (m == 'B') ? 3 : (m == 'L') ? 4 : 5;

    rotateFace(cube[f], dir);

    char temp[3];
    if (m == 'U') {
        for (int i = 0; i < 3; ++i) temp[i] = cube[2][0][i];
        if (dir == '+') {
            for (int i = 0; i < 3; ++i) cube[2][0][i] = cube[5][0][i];
            for (int i = 0; i < 3; ++i) cube[5][0][i] = cube[3][0][i];
            for (int i = 0; i < 3; ++i) cube[3][0][i] = cube[4][0][i];
            for (int i = 0; i < 3; ++i) cube[4][0][i] = temp[i];
        } else {
            for (int i = 0; i < 3; ++i) cube[2][0][i] = cube[4][0][i]; 
            for (int i = 0; i < 3; ++i) cube[4][0][i] = cube[3][0][i]; 
            for (int i = 0; i < 3; ++i) cube[3][0][i] = cube[5][0][i]; 
            for (int i = 0; i < 3; ++i) cube[5][0][i] = temp[i];       
        }
    }
    else if (m == 'D') {
        for (int i = 0; i < 3; ++i) temp[i] = cube[2][2][i];
        if (dir == '+') {
            for (int i = 0; i < 3; ++i) cube[2][2][i] = cube[4][2][i]; 
            for (int i = 0; i < 3; ++i) cube[4][2][i] = cube[3][2][i]; 
            for (int i = 0; i < 3; ++i) cube[3][2][i] = cube[5][2][i]; 
            for (int i = 0; i < 3; ++i) cube[5][2][i] = temp[i];       
        } else {
            for (int i = 0; i < 3; ++i) cube[2][2][i] = cube[5][2][i];
            for (int i = 0; i < 3; ++i) cube[5][2][i] = cube[3][2][i];
            for (int i = 0; i < 3; ++i) cube[3][2][i] = cube[4][2][i];
            for (int i = 0; i < 3; ++i) cube[4][2][i] = temp[i];
        }
    }
    else if (m == 'F') {
        for (int i = 0; i < 3; ++i) temp[i] = cube[0][2][i];
        if (dir == '+') {
            for (int i = 0; i < 3; ++i) cube[0][2][i] = cube[4][2 - i][2];
            for (int i = 0; i < 3; ++i) cube[4][i][2] = cube[1][0][i];
            for (int i = 0; i < 3; ++i) cube[1][0][i] = cube[5][2 - i][0];
            for (int i = 0; i < 3; ++i) cube[5][i][0] = temp[i];
        } else {
            for (int i = 0; i < 3; ++i) cube[0][2][i] = cube[5][i][0];
            for (int i = 0; i < 3; ++i) cube[5][i][0] = cube[1][0][2 - i];
            for (int i = 0; i < 3; ++i) cube[1][0][i] = cube[4][i][2];
            for (int i = 0; i < 3; ++i) cube[4][i][2] = temp[2 - i];
        }
    }
    else if (m == 'B') {
        for (int i = 0; i < 3; ++i) temp[i] = cube[0][0][i];
        if (dir == '+') {
            for (int i = 0; i < 3; ++i) cube[0][0][i] = cube[5][i][2];
            for (int i = 0; i < 3; ++i) cube[5][i][2] = cube[1][2][2 - i];
            for (int i = 0; i < 3; ++i) cube[1][2][i] = cube[4][i][0];
            for (int i = 0; i < 3; ++i) cube[4][i][0] = temp[2 - i];
        } else {
            for (int i = 0; i < 3; ++i) cube[0][0][i] = cube[4][2 - i][0];
            for (int i = 0; i < 3; ++i) cube[4][i][0] = cube[1][2][i];
            for (int i = 0; i < 3; ++i) cube[1][2][i] = cube[5][2 - i][2];
            for (int i = 0; i < 3; ++i) cube[5][i][2] = temp[i];
        }
    }
    else if (m == 'L') {
        for (int i = 0; i < 3; ++i) temp[i] = cube[0][i][0];
        if (dir == '+') {
            for (int i = 0; i < 3; ++i) cube[0][i][0] = cube[3][2 - i][2];
            for (int i = 0; i < 3; ++i) cube[3][i][2] = cube[1][2 - i][0];
            for (int i = 0; i < 3; ++i) cube[1][i][0] = cube[2][i][0];
            for (int i = 0; i < 3; ++i) cube[2][i][0] = temp[i];
        } else {
            for (int i = 0; i < 3; ++i) cube[0][i][0] = cube[2][i][0];
            for (int i = 0; i < 3; ++i) cube[2][i][0] = cube[1][i][0];
            for (int i = 0; i < 3; ++i) cube[1][i][0] = cube[3][2 - i][2];
            for (int i = 0; i < 3; ++i) cube[3][i][2] = temp[2 - i];
        }
    }
    else if (m == 'R') {
        for (int i = 0; i < 3; ++i) temp[i] = cube[0][i][2];
        if (dir == '+') {
            for (int i = 0; i < 3; ++i) cube[0][i][2] = cube[2][i][2]; 
            for (int i = 0; i < 3; ++i) cube[2][i][2] = cube[1][i][2];
            for (int i = 0; i < 3; ++i) cube[1][i][2] = cube[3][2 - i][0];
            for (int i = 0; i < 3; ++i) cube[3][i][0] = temp[2 - i];
        } else {
            for (int i = 0; i < 3; ++i) cube[0][i][2] = cube[3][2 - i][0];
            for (int i = 0; i < 3; ++i) cube[3][i][0] = cube[1][2 - i][2];
            for (int i = 0; i < 3; ++i) cube[1][i][2] = cube[2][i][2];
            for (int i = 0; i < 3; ++i) cube[2][i][2] = temp[i];
        }
    }
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int T;
    cin >> T;
    while (T--) {
        for (int face = 0; face < 6; ++face) {
            for (int i = 0; i < 3; ++i) {
                for (int j = 0; j < 3; ++j) {
                    cube[face][i][j] = colors[face];
                }
            }
        }
        int n;
        cin >> n;
        while (n--) {
            string cmd;
            cin >> cmd;
            rotateCube(cmd[0], cmd[1]);
        }
        for (int i = 0; i < 3; ++i) {
            for (int j = 0; j < 3; ++j) {
                cout << cube[0][i][j];
            }
            cout << "\n";
        }
    }
    return 0;
}