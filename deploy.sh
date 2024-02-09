# place -nojekkyll to bypass jekyll processing
echo > .nojekyll

#m if you are deploying to a custom dommain
# echo 'www.example.com' > CNAME


git init
git checkout -M main
git add -A
git commit -m "deploy"

# if you are deploying to https://USENAME.github.io
# git -f git@github.com:kolawolecodes/rex_payment.git main:gh-pages

cd -